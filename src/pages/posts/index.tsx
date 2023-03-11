import PostCard from '@/components/Card/Card';
import Layout from '@/components/Layout/Layout';
import { getAllPosts } from '@/lib/posts';
import { getPostCategories, Post } from '@/types/Post';
import classNames from 'classnames';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useState } from 'react';

interface Props {
  posts: Post[];
}
export default function Blog(props: Props) {
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const categories = getPostCategories();
  return (
    <Layout title={'Blog posts'}>
      <Head>
        <title>Blog posts</title>
      </Head>
      <div className="pt-4 sm:pt-6">
        <h1 className="text-center font-serif text-7xl font-medium text-gray-800">
          Posts
        </h1>
        <div className="mx-auto" id="posts">
          <div className="mt-12">
            <div className="flex justify-center gap-2">
              <button
                className={classNames(
                  'rounded-xl bg-gray-50 px-4 py-2 font-sans underline-offset-4',
                  selectedCategory === -1 ? 'underline' : ''
                )}
                onClick={() => setSelectedCategory(-1)}
              >
                All
              </button>
              {categories.map((category, key) => (
                <button
                  key={key}
                  className={classNames(
                    'rounded-xl bg-gray-50 px-4 py-2 font-sans underline-offset-4 hover:text-gray-500',
                    selectedCategory === key ? 'underline' : ''
                  )}
                  onClick={() => {
                    setSelectedCategory(key);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 grid grid-cols-12 gap-8">
            {props.posts.map((post, key) => {
              if (
                selectedCategory !== -1 &&
                // @ts-ignore
                post.meta.category !== getPostCategories()[selectedCategory]
              )
                return;
              return (
                <div key={key} className="col-span-12 mb-4 md:col-span-4">
                  <PostCard
                    title={post.meta.title}
                    date={post.meta.date}
                    slug={post.slug}
                    image={require('../../../public/content/posts/' +
                      post.slug +
                      '/thumbnail.png')}
                    key={key}
                    readingTime={post.meta.readingTime.text}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};
