export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
      {
          name: 'imageLeft',
          title: 'ImageLeft',
          type: 'image',
          options: {
              hotspot: true,
          },
      },
      {
          name: 'imageRight',
          title: 'ImageRight',
          type: 'image',
          options: {
              hotspot: true,
        },
    },
      {
          name: 'largeText',
          title: 'LargeText',
          type: 'string',
      },
      {
          name: 'formTitle',
          title: 'FormTitle',
          type: 'string',
      },
      {
          name: 'formSubtitle',
          title: 'FormSubitle',
          type: 'string',
      },
      {
          name: 'socialTitle',
          title: 'SocialTitle',
          type: 'string',
      },
      {
          name: 'socialIcons',
          title: 'SocialIcons',
          type: 'array',
          of: [{ type: 'image' }],
          options: {
            hotspot: true,
        }
      },
  ],
};
