import Layout from '@/components/common/Layout/Layout';
import EmojiReactions from '@/components/features/EmojiReactions/EmojiReactions';
import Markdown from '@/components/features/Markdown/Markdown';
import PostViews from '@/components/features/PostViews/Views';
import TableOfContents from '@/components/features/TOC/TOC';
import { getFileNames, getPostBySlug } from '@/lib/posts';
import { Post } from '@/types/Post';
import { getRGBDataURL } from '@/util/blur';
import { getUserId } from '@/util/userId';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';
import rehypeHighlight from 'rehype-highlight/lib';
import rehypeSlug from 'rehype-slug';

interface Props {
  post: Post;
}

export default function About(props: Props) {
  const [userId, setUserId] = useState('');
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setUserId(getUserId());
    setDomLoaded(true);
    fetch(`/api/posts/increment_views?slug=${props.post.slug}`); // increment views
  }, [props.post]);

  return (
    <Layout title={props.post.meta.title}>
      <div className="pt-4 sm:pt-12">
        <div>
          <div className="text-center font-sans text-gray-700">
            <Moment format={'D MMM YY'}>{props.post.meta.publishedOn}</Moment>,{' '}
            {props.post.meta.category}
          </div>
          <div className="text-center font-serif text-7xl font-extrabold tracking-wide text-gray-700 transition-all hover:text-gray-800">
            {props.post.meta.title}
          </div>
          <div className="mt-10">
            {/* Banner image - (1200x600) */}
            <div className="relative w-full" style={{ height: '560px' }}>
              <Image
                quality={100}
                style={{ objectFit: 'cover', objectPosition: 'left' }}
                fill
                className="relative rounded-2xl"
                alt={props.post.slug}
                src={require(`../../../public/content/posts/${props.post.slug}/banner.png`)}
                placeholder={'blur'}
                blurDataURL={getRGBDataURL(55, 65, 81)}
              />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10" id="post">
          {domLoaded && (
            <div className="grid grid-cols-12 gap-0 md:gap-12">
              <div className="col-span-12 font-serif md:col-span-9">
                <div className="mb-6 text-3xl font-light">
                  {props.post.meta.abstract}
                </div>
                <div className="w-full">
                  <Markdown content={props.post.content} />
                </div>
                <hr className="mx-auto my-4 mt-12 mb-10 h-1 w-48 rounded border-0 bg-gray-200 transition-all hover:bg-gray-300" />
                <div className="mb-4 flex justify-between">
                  <div>
                    <div className="font-sans font-bold uppercase text-gray-300">
                      Last updated
                    </div>
                    <div className="mt-2 font-serif text-xl text-gray-600">
                      <Moment format={'DD MMMM, YYYY'}>
                        {props.post.meta.updatedOn}
                      </Moment>
                    </div>
                  </div>
                  <div>
                    <div className="font-sans font-bold uppercase text-gray-300">
                      Hits
                    </div>
                    <div className="mt-2 text-right font-serif text-xl text-gray-600">
                      <PostViews slug={props.post.slug} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-3">
                <div className="sticky top-4 mt-2 sm:mt-0">
                  {/* Table of contents */}
                  <div className="mt-2 mb-4 rounded-2xl bg-gray-100 py-3 px-4">
                    <div className="text-lg">Table of contents</div>
                    <TableOfContents />
                  </div>
                  {/* Like buttons */}
                  <EmojiReactions userId={userId} postSlug={props.post.slug} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const fileNames = getFileNames();
  const paths = fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace('.mdx', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

// @ts-ignore
export const getStaticProps: GetStaticProps = async (context: {
  params: { slug: any };
}) => {
  const { slug } = context.params;
  const post = await getPostBySlug(slug.toLowerCase());
  post.content = await serialize(post.content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug, rehypeHighlight],
    },
  });
  return {
    props: {
      post,
    },
  };
};
