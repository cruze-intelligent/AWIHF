import { defineConfig } from 'sanity';
import { presentationTool } from 'sanity/presentation';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemaTypes';
import { structure } from './sanity/structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'awihf-placeholder';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default defineConfig({
  name: 'awihf',
  title: 'AWIHF CMS',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool({ structure }),
    presentationTool({
      previewUrl: {
        origin: siteUrl,
        previewMode: {
          enable: '/api/draft',
          disable: '/api/disable-draft',
        },
      },
    }),
  ],
  tools: (prev) => {
    const structureToolItem = prev.find((tool) => tool.name === 'structure');
    const presentationToolItem = prev.find((tool) => tool.name === 'presentation');
    const remainingTools = prev.filter((tool) => !['structure', 'presentation'].includes(tool.name));

    return [
      ...(structureToolItem ? [structureToolItem] : []),
      ...remainingTools,
      ...(presentationToolItem ? [presentationToolItem] : []),
    ];
  },
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter((template) => !['siteSettings', 'donationInfo', 'applicationWindow'].includes(template.schemaType)),
  },
});
