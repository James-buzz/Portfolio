import HarmonicControl from '@/components/Harmonics/HarmonicControl';
import Layout from '@/components/Layout/Layout';
import dynamic from 'next/dynamic';
import { useState } from 'react';

export default function About() {

    const Oscilloscope = dynamic(
        () => import('@/components/Harmonics/Harmonics'),
        {
            ssr: false,
            loading: () => <></>,
        }
    );

    const [harmonics, setHarmonics] = useState<{ [order: number]: number }>({
        3: 0,
        5: 0,
        7: 0,
        11: 0,
        13: 0,
        15: 0,
    });
    const handleHarmonicChange = (order: number, value: number) => {
        setHarmonics((prevHarmonics) => ({
            ...prevHarmonics,
            [order]: value,
        }));
    };

    return (
        <Layout
            title="Harmonic generator"
        >
            <div className="pt-4 sm:pt-6">
                <h1 className="text-center font-serif text-7xl font-medium text-gray-800">
                    Hi
                </h1>
                <Oscilloscope
                    harmonics={harmonics}
                />
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    {Object.keys(harmonics).map((order) => (
                        <HarmonicControl
                            key={order}
                            harmonicOrder={Number(order)}
                            value={harmonics[Number(order)]}
                            onChange={(value) => handleHarmonicChange(Number(order), value)}
                            color="#ff0000"
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
}
