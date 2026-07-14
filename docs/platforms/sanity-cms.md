# Sanity CMS

## Purpose

Sanity is the content management system for editable website content. It is not the operational database.

## Owned Content

- Homepage content
- About content
- Programmes
- News
- Stories
- Team
- Donation information
- Impact reports
- Hero sections
- Mentorship packages
- Application window state
- Site settings and SEO defaults

## Integration Points

- `sanity.config.ts`
- `sanity/structure.ts`
- `sanity/schemaTypes/`
- `app/studio/[[...index]]/`
- `lib/sanity/client.ts`
- `lib/sanity/image.ts`
- `lib/content/`
- `components/cms/PortableTextRenderer.tsx`

## Studio

The embedded Studio is available at:

```text
/studio
```

Editors should use the Structure tool to browse and edit documents. Presentation is for preview and visual context.

## Environment Variables

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_VERSION`
- `SANITY_READ_TOKEN`
- `SANITY_PREVIEW_SECRET`
- `SANITY_WEBHOOK_SECRET`

## Publishing Workflow

1. Open `/studio`.
2. Edit content.
3. Publish.
4. Confirm the website updates after cache expiry or webhook revalidation.

## Failure Behavior

Content utilities log Sanity fetch failures and use emergency fallbacks where intentionally retained. Fallbacks should not become the primary content source.

## Operational Notes

- Keep schema names stable after content exists.
- Add new editable sections through schemas and `lib/content/`.
- Avoid embedding raw GROQ queries inside page components.
