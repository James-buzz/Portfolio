import Layout from '@/components/Layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import ProfileImg from '../../public/assets/img/profile.png';

export default function About() {
  return (
    <Layout title="About me">
      <div className="pt-4 sm:pt-6">
        <h1 className="text-center font-serif text-7xl font-medium text-gray-800">
          Hi
        </h1>
        <div className="mx-auto mt-24">
          <div className="grid grid-cols-12">
            <div className="col-span-12 sm:col-span-4">
              <div className="mx-auto w-3/4 sm:w-full">
                <Image
                  className="hover:rotate(45) rounded-lg saturate-50 transition-all duration-200 hover:scale-105 hover:saturate-100"
                  src={ProfileImg}
                  alt="Profile img"
                />
              </div>
            </div>
            <div className="col-span-12 mt-10 px-8 font-serif text-3xl font-light text-gray-800 sm:col-span-8 sm:mt-0">
              <div className="mb-8">
                I&apos;m James, a self-taught software and web developer based
                in Manchester, England.
              </div>
              <div className="mb-8">
                I&apos;ve been developing software for the past 10 years,
                working on personal projects, professional engineering projects
                and open-sourced projects.
              </div>
              <div className="mb-8">
                My focus is create useful, accessible and performant software
                for the web.
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 px-4 pb-4" style={{ maxWidth: '41rem' }}>
          <div>
            <h3 className="font-sans text-4xl text-gray-800">Work</h3>
            <div className="mt-2 font-serif text-xl font-normal leading-10 tracking-normal">
              I work at{' '}
              <a href="https://www.unitedutilities.com/">United Utilities</a>, a
              water and wastewater utility company in the North West of England.
              I work on multi-million pound projects with multidisciplinary
              engineering teams.
            </div>
          </div>
          <div className="mt-12">
            <h3 className="font-sans text-4xl text-gray-800">Hobbies</h3>
            <div className="mt-2 font-serif text-xl font-normal leading-10 tracking-normal">
              I enjoy attending meetups when I have time. I frequently attend
              MancJS and Manchester Web Meetup. I am an avid hiker who
              appreciates discovering new places and reaching new heights.
            </div>
          </div>
          <div className="mt-12">
            <h3 className="font-sans text-4xl text-gray-800">Social</h3>
            <div className="mt-2 font-serif text-xl font-normal leading-10 tracking-normal">
              <Link href="https://www.linkedin.com/in/james-lomax/">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex">
                    <BsLinkedin className="h-5 w-5" />
                  </div>
                  <div className="link">LinkedIn</div>
                </div>
              </Link>
              <Link href="https://github.com/James-buzz">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex">
                    <BsGithub className="h-5 w-5" />
                  </div>
                  <div className="link">Github</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
