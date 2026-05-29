export default {
  name: 'announcement',
  title: 'Thông báo',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Nội dung thông báo',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().min(5).max(500),
    },
    {
      name: 'publishedAt',
      title: 'Ngày đăng',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Đường dẫn / file đính kèm (tùy chọn)',
      type: 'url',
      description:
        'URL bài viết hoặc file PDF. Có thể bỏ trống nếu chỉ là thông báo text.',
      validation: (Rule) =>
        Rule.uri({allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel']}),
    },
    {
      name: 'attachment',
      title: 'Hoặc upload file PDF/Doc',
      type: 'file',
      description:
        'Nếu upload file ở đây, hệ thống sẽ ưu tiên dùng file này thay vì trường Link.',
    },
    {
      name: 'order',
      title: 'Thứ tự hiển thị',
      type: 'number',
      description: 'Số nhỏ hơn xuất hiện trước. Mặc định sort theo ngày mới nhất.',
      initialValue: 0,
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
      initialValue: 'published',
      validation: (Rule) => Rule.required(),
    },
  ],
  orderings: [
    {
      title: 'Ngày mới nhất',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {title: 'text', subtitle: 'publishedAt'},
    prepare({title, subtitle}) {
      const shortTitle =
        (title || '').length > 80 ? title.substring(0, 80) + '...' : title
      const date = subtitle ? new Date(subtitle).toLocaleDateString('vi-VN') : ''
      return {title: shortTitle, subtitle: date}
    },
  },
}
