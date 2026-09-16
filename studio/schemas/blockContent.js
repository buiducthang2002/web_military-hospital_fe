export default {
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Underline', value: 'underline'},
          {title: 'Code', value: 'code'},
        ],
      },
    },
    {
      type: 'image',
      title: 'Image',
      options: {hotspot: true},
      fields: [
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
          description: 'Chú thích ảnh',
        },
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Mô tả ảnh cho SEO',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
}
