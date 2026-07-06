import { defineField, defineType } from 'sanity';

export const impactReport = defineType({
  name: 'impactReport',
  title: 'Impact Report',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'downloadUrl',
      title: 'Download URL',
      type: 'url',
      description: 'Use the public PDF path or a hosted report URL.',
    }),
    defineField({
      name: 'executiveSummary',
      title: 'Executive Summary',
      type: 'array',
      of: [{ type: 'text' }],
    }),
    defineField({
      name: 'stats',
      title: 'Key Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Value', type: 'string' }),
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'detail', title: 'Detail', type: 'text', rows: 2 }),
          ],
        },
      ],
    }),
    defineField({
      name: 'phases',
      title: 'Programme Phases',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'period', title: 'Period', type: 'string' }),
            defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 3 }),
            defineField({
              name: 'highlights',
              title: 'Highlights',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'gaps',
      title: 'Remaining Gaps',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'priorities',
      title: 'Scale-Up Priorities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'year',
    },
  },
});
