export default {
  name: 'landing',
  title: 'Landing',
  type: 'document',
  fields: [
      {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
              hotspot: true,
          },
      },
            {
          name: 'imageAlt',
          title: 'ImageALt',
          type: 'image',
          options: {
              hotspot: true,
          },
      },
      {
          name: 'buttonText',
          title: 'ButtonText',
          type: 'string',
      },
      {
          name: 'scrollText',
          title: 'ScrollText',
          type: 'string',
      },
  ],
};
