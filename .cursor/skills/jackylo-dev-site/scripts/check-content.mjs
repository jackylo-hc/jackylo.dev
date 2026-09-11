#!/usr/bin/env node
/**
 * Verifies that every image referenced from src/data/*.json actually
 * exists in public/. This is the most common cause of broken images on
 * this site: a data file points at an asset that was never added.
 *
 * Usage: node .cursor/skills/jackylo-dev-site/scripts/check-content.mjs
 * Exit code 1 when something is missing, 0 when everything resolves.
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

// scripts/ -> jackylo-dev-site/ -> skills/ -> .cursor/ -> repo root
const here = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(here, '..', '..', '..', '..')
const dataDir = join(repoRoot, 'src', 'data')
const publicDir = join(repoRoot, 'public')

/** Recursively collect every `src` string value in the parsed JSON. */
const collectSrcs = (value, acc = []) => {
  if (Array.isArray(value)) {
    for (const item of value) collectSrcs(item, acc)
  } else if (value && typeof value === 'object') {
    for (const [key, val] of Object.entries(value)) {
      if (key === 'src' && typeof val === 'string') acc.push(val)
      else collectSrcs(val, acc)
    }
  }
  return acc
}

let checked = 0
let missing = 0

for (const file of readdirSync(dataDir).filter((f) => f.endsWith('.json'))) {
  const data = JSON.parse(readFileSync(join(dataDir, file), 'utf8'))
  for (const src of collectSrcs(data)) {
    if (!src.startsWith('/')) {
      console.warn(`  WARN     ${file}: "${src}" is not root-relative; it may not resolve`)
      continue
    }
    checked += 1
    if (!existsSync(join(publicDir, src.replace(/^\//, '')))) {
      missing += 1
      console.error(`  MISSING  ${file}: public${src} does not exist`)
    }
  }
}

if (missing > 0) {
  console.error(`\n${missing} of ${checked} referenced assets are missing from public/.`)
  console.error('Add the files, or update the data to point at existing assets.')
  process.exit(1)
}

console.log(`All ${checked} referenced assets exist in public/.`)
