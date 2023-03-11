/**
 * The purpose of this file is to act as a helper to access mdx files for
 * posts that are publicly available on this website.
 */
import { Post } from '@/types/Post';
import fs from 'fs';
import matter from 'gray-matter';
import moment from 'moment';
import path from 'path';
import ReadingTime from 'reading-time';

const FOLDER = path.join(process.cwd(), 'content', 'posts');

const getFileNames = () => {
  return fs.readdirSync(path.join(FOLDER));
};

const getAllPosts = (): Post[] => {
  const fileNames = getFileNames();

  // @ts-ignore
  const posts: Post[] = fileNames.map((fileName) => {
    if (!fileName.endsWith('.mdx')) return;
    const markdownWithMeta = fs.readFileSync(path.join(FOLDER, fileName));
    const { data: metaData, content } = matter(markdownWithMeta);
    return {
      slug: fileName.replace('.mdx', '') as string,
      meta: {
        title: metaData.title as string,
        abstract: metaData.abstract as string,
        category: metaData.category as string,
        date: metaData.date as string,
        readingTime: ReadingTime(content),
      },
      content: '',
    };
  });

  posts.sort((a: Post, b: Post) => {
    return moment(a.meta.date) < moment(b.meta.date) ? 1 : -1;
  });

  return posts;
};

const getPostBySlug = (slug: string): Post => {
  slug = slug.toLowerCase();
  const markdownWithMeta = fs.readFileSync(path.join(FOLDER, `${slug}.mdx`));
  const { data: metaData, content } = matter(markdownWithMeta);
  return {
    slug: slug,
    meta: {
      title: metaData.title,
      abstract: metaData.abstract,
      category: metaData.category,
      date: metaData.date,
      readingTime: ReadingTime(content),
    },
    content: content,
  };
};

// Export functions and references as globally accessible
export { FOLDER, getFileNames, getAllPosts, getPostBySlug };
