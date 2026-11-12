import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One or two sentences. Shown in the post list and to search engines. */
      description: z.string(),
      date: z.coerce.date(),
      author: z.enum(['Chris Walls', 'TP Pura', 'Chris Walls & TP Pura']),
      /** Path to an image next to the post, e.g. ./cover.png. */
      cover: image().optional(),
      coverAlt: z.string().default(''),
      /** Drafts show while developing and are left out of the published site. */
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
