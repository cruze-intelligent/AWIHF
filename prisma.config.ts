import { defineConfig, env } from 'prisma/config';

const url = process.env.DIRECT_URL 
  ? env('DIRECT_URL') 
  : process.env.DATABASE_URL 
  ? env('DATABASE_URL') 
  : 'postgresql://postgres:postgres@localhost:5432/postgres';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url,
  },
});

