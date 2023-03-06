import Layout from '@/components/Layout/Layout';
import Markdown from '@/components/Markdown/Markdown';
import TableOfContents from '@/components/TOC/TOC';
import { getFileNames, getPostBySlug } from '@/lib/posts';
import { Post } from '@/types/Post';
import { getRGBDataURL } from '@/util/blur';
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
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, [props.post]);
  return (
    <Layout title={props.post.meta.title}>
      <div className="pt-4 sm:pt-12">
        <div>
          <div className="text-center font-serif text-gray-700">
            <Moment format={'DD MMMM, YYYY'}>{props.post.meta.date}</Moment>
          </div>
          <div className="text-center font-serif text-7xl font-extrabold text-gray-700">
            {props.post.meta.title}
          </div>
          <div className="mt-14">
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
              </div>
              <div className="col-span-12 md:col-span-3">
                <div className="sticky top-4">
                  {/* Like buttons */}

                  {/* Table of contents */}
                  <div className="rounded-2xl bg-gray-100 py-3 px-4 ">
                    <div className="text-lg">Table of contents</div>
                    <TableOfContents />
                  </div>
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
