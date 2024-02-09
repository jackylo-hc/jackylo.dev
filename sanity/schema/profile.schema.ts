import { SchemaTypeDefinition } from 'sanity';

const profileSchema: SchemaTypeDefinition = {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'array',
      of: [
        {
          name: 'socialMediaLink',
          title: 'Social Media Link',
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Github', value: 'github' },
                  { title: 'LinkedIn', value: 'linkedin' },
                ],
              },
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
          ],
        },
      ],
    },
  ],
};

export default profileSchema;
