import { type SchemaTypeDefinition } from 'sanity';
import profile from './schema/profile.schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile],
};
