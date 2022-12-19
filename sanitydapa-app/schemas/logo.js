export default {
  name: 'logo',
  title: 'Logo',
  type: 'document',
  fields: [
      {
          name: 'logoImg',
          title: 'LogoImg',
          type: 'image',
          options: {
              hotspot: true,
          },
      },
      {
          name: 'logoText',
          title: 'LogoText',
          type: 'string',
      },
  ],
};
