import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface Props {
  children: React.ReactNode;
  outside?: React.ReactNode;
  title: string;
  description?: string;
}
const Layout: React.FC<Props> = (props) => {
  return (
    <>
      {/* Browser header meta */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextSeo title={props.title} description={props.description} />
      {/* Include HTML code outside of the wrapper */}
      <div>{props.outside}</div>
      {/* HTML Content */}
      <div
        id="wrapper"
        className="relative flex min-h-screen flex-col justify-between"
      >
        <div>
          <header className="mx-auto max-w-6xl px-6 pt-6 pb-6">
            <Header />
          </header>
          <main className="mx-auto max-w-6xl px-6 pr-6 sm:pr-4">
            {props.children}
          </main>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};
export default Layout;
