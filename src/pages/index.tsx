import PostCard from '@/components/common/Card/Card';
import Layout from '@/components/common/Layout/Layout';
import Jumbotron from '@/components/features/Jumbotron/Jumbotron';
import SocialLink from '@/components/features/SocialLink/SocialLink';
import { getAllPosts } from '@/lib/posts';
import { Post } from '@/types/Post';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import GithubImg from '../../public/assets/img/social/github.png';
import LinkedinImg from '../../public/assets/img/social/linkedin.png';

interface Props {
  recent_posts: Post[];
}
export default function Home(props: Props) {
  const Background = dynamic(
    () => import('@/components/common/Background/Background'),
    {
      ssr: false,
      loading: () => <></>,
    }
  );
  return (
    <Layout
      outside={<Background />}
      title="James.buzz"
      description="James is a self-taught Software Developer and a full-time Electrical Engineer. I blog about my projects and share tips about my latest hikes."
    >
      <div>
        <Jumbotron />
        <div className="mt-24 mb-16">
          <div className="font-sans text-3xl font-medium">Social links</div>
          <div className="mt-2 font-sans">Follow me to find out more.</div>
          <div className="mt-6 grid grid-cols-12 gap-8">
            <div className="col-span-6 mb-4 md:col-span-3">
              <SocialLink
                title="Github"
                image={GithubImg.src}
                link={'https://github.com/James-buzz'}
                subtitle={'Repository of open-source code'}
              />
            </div>
            <div className="col-span-6 mb-4 md:col-span-3">
              <SocialLink
                title="LinkedIn"
                image={LinkedinImg.src}
                link={'https://www.linkedin.com/in/james-lomax/'}
                subtitle={'Professional career profile'}
              />
            </div>
          </div>
        </div>
        <div className="mt-28 mb-16">
          <div className="font-sans text-3xl font-medium">Recent posts</div>
          <div className="mt-2 font-sans">
            Check out a few of my most recent publishings.
          </div>
          <div className="mt-6 grid w-full grid-cols-12 gap-0 md:gap-10">
            {props.recent_posts &&
              props.recent_posts.map((post, key) => (
                <div
                  key={key}
                  className="col-span-12 mb-4 sm:col-span-6 md:col-span-4 lg:col-span-4"
                >
                  <PostCard
                    title={post.meta.title}
                    date={post.meta.date}
                    slug={post.slug}
                    image={require(`../../public/content/posts/${post.slug}/thumbnail.png`)}
                    readingTime={post.meta.readingTime.text}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      recent_posts: getAllPosts().splice(0, 3),
    },
  };
};
