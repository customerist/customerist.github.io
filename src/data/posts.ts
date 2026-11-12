import { getCollection } from 'astro:content';

/** Posts for this build, newest first. Drafts only appear while developing. */
export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const formatDate = (date: Date) => date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
