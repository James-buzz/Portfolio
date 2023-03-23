import Layout from '@/components/common/Layout/Layout';
import Head from 'next/head';

export default function PrivacyPolicy() {
    return (
        <Layout title="Privacy Policy">
            <Head>
                <title>Privacy Policy</title>
            </Head>
            <div className="pt-4 sm:pt-6">
                <h1 className="text-center font-serif text-7xl font-medium text-gray-800 mb-14">
                    Privacy Policy
                </h1>
                <p className="mt-4 text-gray-700">
                    Your privacy is important to us. This Privacy Policy explains how James.buzz, owned and operated by James (the "Owner"), collects, uses, and discloses your personal information when you access or use our website. By using the website, you agree to the collection and use of information in accordance with this Privacy Policy.
                </p>
                <h2 className="text-xl font-medium mt-8">Information Collection and Use</h2>
                <p className="mt-4 text-gray-700">
                    We may collect various types of information, including personal data, when you use our website. This may include, but is not limited to, your name, email address, IP address, and other information that you voluntarily provide to us. We use this information to improve our website, provide you with a better user experience, and communicate with you.
                </p>
                <h2 className="text-xl font-medium mt-8">Cookies and Tracking Technologies</h2>
                <p className="mt-4 text-gray-700">
                    We use cookies and other tracking technologies to collect information about your browsing activities on our website, such as pages visited, links clicked, and other actions taken on the website. Cookies help us understand your preferences and enhance your user experience. You can control your cookie settings in your web browser, but please note that some features of our website may not function properly if you disable cookies.
                </p>
                <h2 className="text-xl font-medium mt-8">How We Use Your Information</h2>
                <p className="mt-4 text-gray-700">
                    We use the information we collect for various purposes, including to:
                    <ul className="list-disc pl-5 mt-2">
                        <li>Provide, maintain, and improve our website;</li>
                        <li>Personalise your experience on our website;</li>
                        <li>Communicate with you, including responding to your inquiries and providing updates about our services;</li>
                        <li>Analyse website usage and user behaviour to improve our website and offerings;</li>
                        <li>Protect the security and integrity of our website;</li>
                        <li>Comply with legal requirements and enforce our terms and conditions.</li>
                    </ul>
                </p>
                <h2 className="text-xl font-medium mt-8">Sharing Your Information</h2>
                <p className="mt-4 text-gray-700">
                    We do not sell or rent your personal information to third parties. However, we may share your information with trusted service providers who assist us in operating our website, conducting our business, or providing services to you, so long as those parties agree to keep this information confidential. We may also disclose your information when we believe it is necessary to comply with the law, enforce our terms and conditions, or protect our rights or the rights of others.
                </p>
                <h2 className="text-xl font-medium mt-8">Security</h2>
                <p className="mt-4 text-gray-700">
                    The security of your personal information is important to us. We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, disclosure, alteration, or destruction. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                </p>
                <h2 className="text-xl font-medium mt-8">Links to Other Websites</h2>
                <p className="mt-4 text-gray-700">
                    Our website may contain links to other
                    websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's website. We strongly advise you to review the privacy policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
                </p>
                <h2 className="text-xl font-medium mt-8">Children@apos;s Privacy</h2>
                <p className="mt-4 text-gray-700">
                    Our website is not intended for use by anyone under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and you become aware that your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from children under 18, we will take steps to remove that information from our systems.
                </p>
                <h2 className="text-xl font-medium mt-8">Changes to This Privacy Policy</h2>
                <p className="mt-4 text-gray-700">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
                <h2 className="text-xl font-medium mt-8">Contact Us</h2>
                <p className="mt-4 text-gray-700">
                    If you have any questions or concerns about this Privacy Policy, please contact us:
                    <ul className="list-disc pl-5 mt-2">
                        <li>By email: contact@james.buzz</li>
                    </ul>
                </p>
                <p className="mt-4 text-gray-700">
                    Your continued use of our website after any changes to this Privacy Policy constitutes your acceptance of the updated Privacy Policy. If you do not agree with any changes, you should stop using our website.
                </p>
            </div>
        </Layout>
    );
}
