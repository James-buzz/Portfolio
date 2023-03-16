// components/Oscilloscope.tsx

import p5, { Graphics } from 'p5';
import React, { useEffect, useRef } from 'react';

interface OscilloscopeProps {
    voltsDiv: number;
    msDiv: number;
}

const Oscilloscope: React.FC<OscilloscopeProps> = ({ voltsDiv, msDiv }) => {
    const oscilloscopeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!oscilloscopeRef.current) return;

        const sketch = (p: p5) => {
            let gr: Graphics;
            let phase = 0;

            p.setup = () => {
                gr = p.createGraphics(800, 400);
                p.createCanvas(800, 400);
                p.frameRate(60);
            };

            p.draw = () => {
                p.background(0);

                gr.background(50);
                gr.stroke(255);
                gr.strokeWeight(2);

                const width = gr.width;
                const height = gr.height;

                const samplesPerDiv = width / 10;
                const scaleY = height / (2 * voltsDiv);

                const signalFrequency = 50;
                const signalAmplitude = 1;
                const timeDivsPerPeriod = 1 / (signalFrequency / (1000 / msDiv));

                phase += (2 * Math.PI) / (samplesPerDiv * timeDivsPerPeriod);
                if (phase >= 2 * Math.PI) {
                    phase -= 2 * Math.PI;
                }

                gr.beginShape();
                for (let x = 0; x < width; x++) {
                    const t = (x / samplesPerDiv) * (msDiv / 1000);
                    const y = signalAmplitude * Math.sin(2 * Math.PI * signalFrequency * t + phase);
                    gr.vertex(x, height / 2 - y * scaleY);
                }
                gr.endShape();

                p.image(gr, 0, 0);
            };
        };

        const oscilloscopeP5 = new p5(sketch, oscilloscopeRef.current);

        return () => {
            oscilloscopeP5.remove();
        };
    }, [oscilloscopeRef, voltsDiv, msDiv]);

    return <div ref={oscilloscopeRef} />;
};

export default Oscilloscope;