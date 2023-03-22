import Layout from '@/components/common/Layout/Layout';
import Head from 'next/head';

export default function Uses() {
  return (
    <Layout title="Tech uses">
      <Head>
        <title>Uses</title>
      </Head>
      <div className="pt-4 sm:pt-6">
        <h1 className="text-center font-serif text-7xl font-medium text-gray-800">
          Uses
        </h1>
      </div>
    </Layout>
  );
}
