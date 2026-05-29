export default {
  name: 'category',
  title: 'Danh mục',
  type: 'document',
  fields: [
    {
      name: 'displayName',
      title: 'Tên hiển thị',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'categoryId',
      title: 'Category ID (khớp với FE)',
      type: 'string',
      description: 'Ví dụ: hospital-activities, domestic-medical, world-medical, professional-articles',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'displayName', maxLength: 96},
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
      name: 'icon',
      title: 'Icon (emoji)',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Thứ tự hiển thị',
      type: 'number',
      initialValue: 0,
    },
  ],
  preview: {
    select: {title: 'displayName', subtitle: 'module', icon: 'icon'},
    prepare({title, subtitle, icon}) {
      return {
        title: `${icon || ''} ${title}`,
        subtitle: `Module: ${subtitle}`,
      }
    },
  },
}
