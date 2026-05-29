export default {
  name: 'article',
  title: 'Bài viết',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tiêu đề',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(200),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {source: 'title', maxLength: 200},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'module',
      title: 'Module',
      type: 'string',
      options: {
        list: [
          {title: 'Tin tức', value: 'tintuc'},
          {title: 'Hợp tác', value: 'hoptac'},
          {title: 'Đảng - Chính trị', value: 'partypolitics'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Danh mục',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'thumbnail',
      title: 'Ảnh đại diện',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Mô tả ngắn',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(500),
    },
    {
      name: 'content',
      title: 'Nội dung bài viết (HTML)',
      type: 'text',
      rows: 30,
      description:
        'Nội dung HTML. Có thể dùng thẻ <p>, <h2>, <strong>, <em>, <img src="..." />, ...',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'contentImages',
      title: 'Ảnh dùng trong nội dung',
      type: 'array',
      description: 'Upload ảnh ở đây để lấy URL chèn vào HTML phía trên.',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [{name: 'caption', type: 'string', title: 'Chú thích'}],
        },
      ],
    },
    {
      name: 'author',
      title: 'Tác giả',
      type: 'string',
      initialValue: 'Admin',
    },
    {
      name: 'publishedAt',
      title: 'Ngày đăng',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'views',
      title: 'Lượt xem',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    },
    {
      name: 'status',
      title: 'Trạng thái',
      type: 'string',
      options: {
        list: [
          {title: 'Bản nháp', value: 'draft'},
          {title: 'Đã đăng', value: 'published'},
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: (Rule) => Rule.required(),
    },
  ],
  orderings: [
    {
      title: 'Ngày đăng (mới nhất)',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {title: 'title', subtitle: 'module', media: 'thumbnail'},
    prepare({title, subtitle, media}) {
      return {title, subtitle: `Module: ${subtitle}`, media}
    },
  },
}
