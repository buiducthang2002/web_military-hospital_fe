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
      type: 'string',
      description: 'Chọn danh mục đúng với Module đã chọn ở trên.',
      options: {
        list: [
          // Module: Tin tức
          {title: 'Tin tức • Tin tức hoạt động bệnh viện', value: 'hospital-activities'},
          {title: 'Tin tức • Tin tức y học trong nước', value: 'domestic-medical'},
          {title: 'Tin tức • Tin tức y học thế giới', value: 'world-medical'},
          {title: 'Tin tức • Bài viết chuyên môn', value: 'professional-articles'},
          // Module: Đảng - Chính trị
          {title: 'Đảng - Chính trị • Công tác Đảng', value: 'party-work'},
          {title: 'Đảng - Chính trị • Hoạt động kỷ niệm, tổ chức', value: 'politics'},
          {title: 'Đảng - Chính trị • Lịch sử đổi mới', value: 'youth-union'},
          // Module: Dược phẩm - Sức khoẻ
          {title: 'Dược phẩm - Sức khoẻ • Dược lâm sàng', value: 'cooperation-scientific'},
          {title: 'Dược phẩm - Sức khoẻ • Hướng dẫn sử dụng thuốc', value: 'cooperation-competitions'},
          {title: 'Dược phẩm - Sức khoẻ • Đơn vị đồng hành', value: 'cooperation-partners'},
        ],
      },
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
        'Nội dung HTML. Dùng thẻ <p>, <h2>, <strong>, <em>... Để chèn ảnh: upload ảnh ở mục "Ảnh dùng trong nội dung" bên dưới, rồi viết <img src="{{IMG1}}" style="max-width:100%" /> — {{IMG1}} là ảnh thứ 1, {{IMG2}} là ảnh thứ 2...',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'contentImages',
      title: 'Ảnh dùng trong nội dung',
      type: 'array',
      description:
        'Upload ảnh theo thứ tự. Ảnh đầu tiên = {{IMG1}}, ảnh thứ hai = {{IMG2}}... Chèn vào ô "Nội dung bài viết (HTML)" bằng <img src="{{IMG1}}" />.',
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
    {
      name: 'featured',
      title: 'Tin nổi bật (hiển thị ngoài trang chủ)',
      type: 'boolean',
      description: 'Bật để bài viết xuất hiện trong khung "TIN NỔI BẬT" của trang chủ.',
      initialValue: false,
    },
    {
      name: 'featuredOrder',
      title: 'Thứ tự hiển thị nổi bật',
      type: 'number',
      description: 'Số nhỏ hơn xuất hiện trước. Bài có featured = bật mới có tác dụng.',
      initialValue: 0,
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
