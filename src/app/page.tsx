import Image from 'next/image';
import { GithubCircle, Linkedin, Instagram, MapPin, Link } from 'iconoir-react';
import parseHtml from 'html-react-parser';
import clsx from 'clsx';

import profile from '@/data/profile.json';
import experiences from '@/data/experiences.json';
import projects from '@/data/projects.json';
import education from '@/data/education.json';

export default function Home() {
  return (
    <>
      <div className="w-full h-1 bg-gradient-to-r from-themeBlue via-themeLightBlue to-themeWhite"></div>
      <main className="max-w-2xl mx-auto px-6 py-6 mt-4 md:px-4">
        {/** Profile  */}
        <div className="border border-themeLightBlue bg-slate-50 rounded-3xl">
          <div className="flex flex-col items-center gap-y-2 p-4 border-b border-b-themeLightBlue">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <Image src={profile.profilePic.src} alt={profile.profilePic.alt} width={80} height={80} />
            </div>
            <div className="text-sm">{profile.title}</div>
            <div className="text-xl font-bold">{profile.name}</div>
            <div className="flex font-extrabold items-center">
              <MapPin strokeWidth={2} width={16} height={16} className="mr-1" /> {profile.location}
            </div>
            <div className="flex gap-x-4">
              {profile.socialMedia.map((item) => (
                <a href={item.url} key={item.icon} target="_blank">
                  {item.icon === 'github' && <GithubCircle className="text-themeOrange" />}
                  {item.icon === 'linkedin' && <Linkedin className="text-themeOrange" />}
                  {item.icon === 'instagram' && <Instagram className="text-themeOrange" />}
                </a>
              ))}
            </div>
          </div>
          <div className="p-4">{parseHtml(profile.intro)}</div>
          <div className="p-4 flex gap-2 flex-wrap">
            {profile.skills.map((item) => (
              <div
                className="inline-flex px-2 py-0.5 text-xs border ring-1 bg-themeLightBlue/20 ring-inset ring-themeLightBlue/50 rounded-md text-themeBlue font-bold"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        {/** Experiences */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-themeBlue mb-4">Experience</h2>
          <div className="flex flex-col">
            {experiences.map((experience) => (
              <div className="flex" key={experience.company}>
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-100">
                    <Image src={experience.logo.src} alt={experience.logo.alt} width={56} height={56} />
                  </div>
                  <div className="w-0.5 grow bg-slate-200 my-2"></div>
                </div>
                <div className="ml-4 mt-2">
                  <div className="text-2xl font-semibold">{experience.title}</div>
                  <div className="text-sm tracking-tight text-themeOrange">
                    {experience.company} | {experience.year} | {experience.location}
                  </div>
                  <div className="mt-1">{parseHtml(experience.desc)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/** Projects */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-themeBlue mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div className="border border-themeLightBlue bg-slate-50 rounded-3xl" key={project.title}>
                <div className="p-4 flex flex-col">
                  <Image src={project.image.src} alt={project.image.alt} width={500} height={500} className="w-full rounded-3xl overflow-hidden" />
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      className="mt-2 text-themeBlue font-bold text-xl flex items-center"
                    >
                      {project.title} <Link className="ml-2 text-sm" />
                    </a>
                  )}
                  {!project.link && <div className="mt-2 text-themeBlue font-bold text-xl">{project.title}</div>}
                  <div className="mt-2 text-themeOrange">{project.tech}</div>
                  <div className="mt-2">{project.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/** Education */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-themeBlue mb-4">Education</h2>
          <div className="border border-themeLightBlue bg-slate-50 rounded-3xl">
            {education.map((item, index) => (
              <div
                className={clsx('p-4', index !== education.length - 1 && 'border-b border-b-themeLightBlue')}
                key={item.name}
              >
                <div className="text-xl font-bold">{item.name}</div>
                <div>{item.program}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
