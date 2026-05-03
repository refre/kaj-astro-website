import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    metaDescription: z.string().optional(),
    category: z.string(),
    date: z.coerce.date(),
    author: z.object({
      name: z.string(),
      title: z.string(),
      bio: z.string(),
      avatar: z.string(),
    }),
    readTime: z.string(),
    featuredImage: z.string(),
    relatedPosts: z.array(
      z.object({
        slug: z.string(),
        title: z.string(),
        date: z.coerce.date(),
        category: z.string(),
        thumbnail: z.string(),
      })
    ).optional().default([]),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    lastUpdated: z.string(),
    metaTitle: z.string().optional(),
  }),
});

export const collections = { blog, pages };
