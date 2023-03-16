import EmojiReactions from '@/components/EmojiReactions/EmojiReactions';
import Layout from '@/components/Layout/Layout';
import Markdown from '@/components/Markdown/Markdown';
import PostViews from '@/components/PostViews/Views';
import TableOfContents from '@/components/TOC/TOC';
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

  const [userId, setUserId] = useState("");
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
            <Moment format={'D MMM YY'}>{props.post.meta.date}</Moment>, {props.post.meta.category}
          </div>
          <div className="tracking-wide text-center font-serif text-7xl transition-all font-extrabold hover:text-gray-800 text-gray-700">
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
                <hr className='mt-12 mb-10 w-48 h-1 mx-auto my-4 transition-all bg-gray-200 hover:bg-gray-300 border-0 rounded' />
                <div className="flex justify-between">
                  <div>
                    <div className="font-bold uppercase text-gray-300 font-sans">
                      Last updated
                    </div>
                    <div className="mt-2 text-gray-600 font-serif text-xl">
                      <Moment format={'DD MMMM, YYYY'}>{props.post.meta.date}</Moment>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold uppercase text-gray-300 font-sans">
                      Hits
                    </div>
                    <div className="mt-2 text-right text-gray-600 font-serif text-xl">
                      <PostViews slug={props.post.slug} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-3">
                <div className="sticky top-4 mt-2 sm:mt-0">
                  {/* Table of contents */}
                  <div className="rounded-2xl bg-gray-100 py-3 px-4 mt-2 mb-4">
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
