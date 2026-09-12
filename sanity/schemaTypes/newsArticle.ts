export const newsArticle = {
  name: 'newsArticle',
  title: 'News Article',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: 'required' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: 'required' },
    { name: 'category', title: 'Category', type: 'string', validation: 'required' },
    { name: 'summary', title: 'Summary', type: 'text', rows: 3, validation: 'required' },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
      validation: 'required',
      fields: [
        { name: 'alt', title: 'Alternative Text', type: 'string' },
      ],
    },
    {
      name: 'articleImage',
      title: 'Article Image',
      type: 'image',
      description: 'Optional image for the full article page when it should differ from the listing card image.',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Alternative Text', type: 'string' },
      ],
    },
    { name: 'author', title: 'Author', type: 'string', validation: 'required' },
    { name: 'publishedAt', title: 'Publish Date', type: 'datetime', validation: 'required' },
    { name: 'body', title: 'Body Content', type: 'array', of: [{ type: 'block' }] },
    { name: 'seo', title: 'SEO Override', type: 'reference', to: [{ type: 'seoSettings' }] },
    { name: 'seoTitle', title: 'SEO Title', type: 'string' },
    { name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 2 },
    {
      name: 'seoImage',
      title: 'SEO / Social Sharing Image',
      type: 'image',
      description: 'Optional image for Open Graph and social previews when it should differ from article imagery.',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Alternative Text', type: 'string' },
      ],
    },
    {
      name: 'votingUrl',
      title: 'Voting URL',
      type: 'url',
      description: 'Optional external voting or campaign destination for announcement articles.',
    },
  ],
};
