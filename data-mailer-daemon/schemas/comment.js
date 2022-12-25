import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
        name: 'name',
        type: 'string',
    },
    {
        name: 'email',
        type: 'string',
    },
    {
        name: 'comment',
        type: 'text',
    },
    {
        name: 'approved',
        type: 'boolean',
        description: 'Non approved comments wont appear on site...',
    },
    {
        name: 'post',
        type: 'reference',
        to: [{ type: 'post' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
