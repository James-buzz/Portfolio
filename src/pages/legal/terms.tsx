import Layout from '@/components/common/Layout/Layout';
import Head from 'next/head';

export default function Uses() {
    return (
        <Layout title="Terms and Conditions">
            <Head>
                <title>Terms and Conditions</title>
            </Head>
            <div className="pt-4 sm:pt-6">
                <h1 className="text-center font-serif text-7xl font-medium text-gray-800 mb-14">
                    Terms and Conditions
                </h1>
                <p className="mt-4 text-gray-700">
                    Welcome to James.buzz, a website owned and operated by James (the&quot;Owner&quot;). By accessing or using the website, you agree to be bound by the following terms and conditions (the &quot;Terms and Conditions&quot;). If you do not agree to these Terms and Conditions, you may not use the website.
                </p>
                <h2 className="text-xl font-medium mt-8">Analytics and Cookies</h2>
                <p className="mt-4 text-gray-700">
                    James.buzz uses analytics provided by Vercel to collect data about visitors&apos; usage patterns and preferences. We also use cookies to enhance users&apos; capabilities and provide certain features on the website. By using the website, you consent to the collection and use of this information in accordance with our Privacy Policy.
                </p>
                <h2 className="text-xl font-medium mt-8">Disclaimer</h2>
                <p className="mt-4 text-gray-700">
                    The information provided on James.buzz is for general informational purposes only. The Owner makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
                </p>
                <h2 className="text-xl font-medium mt-8">Limitation of Liability</h2>
                <p className="mt-4 text-gray-700">
                    In no event shall the Owner be liable for any damages arising out of or in connection with the use or inability to use the website or the information contained on the website, including but not limited to indirect, consequential, incidental, or punitive damages.
                </p>
                <h2 className="text-xl font-medium mt-8">Changes to the Terms and Conditions</h2>
                <p className="mt-4 text-gray-700">
                    The Owner reserves the right to modify these Terms and Conditions at any time. Your continued use of the website after any such modifications shall constitute your acceptance of the modified Terms and Conditions.
                </p>
            </div>
        </Layout>
    );
}