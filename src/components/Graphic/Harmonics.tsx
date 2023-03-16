// components/HarmonicGenerator.tsx
import p5Types from 'p5';
import React, { useState } from 'react';
import Sketch from 'react-p5';

interface HarmonicGeneratorProps { }

const HarmonicGenerator: React.FC<HarmonicGeneratorProps> = () => {
    const [baseFrequency] = useState(50);
    const [harmonics, setHarmonics] = useState([0, 0, 0, 0, 0, 0]);
    const [timeScale, setTimeScale] = useState(1);

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(800, 400).parent(canvasParentRef);
    };

    const drawGrid = (p5: p5Types) => {
        const gridSize = 50;

        for (let i = 0; i < p5.width / gridSize + 1; i++) {
            p5.strokeWeight(1);
            p5.stroke(50);
            p5.line(i * gridSize, 0, i * gridSize, p5.height);
        }

        for (let i = 0; i < p5.height / gridSize + 1; i++) {
            p5.strokeWeight(1);
            p5.stroke(50);
            p5.line(0, i * gridSize, p5.width, i * gridSize);
        }
    };

    const draw = (p5: p5Types) => {
        p5.background(0);
        drawGrid(p5);

        const centerY = p5.height / 2;

        p5.stroke(0, 255, 0);
        p5.strokeWeight(2);

        const numPoints = 1000;
        const time = p5.millis() / 1000;
        const dt = (1 / (baseFrequency * numPoints)) * timeScale;

        p5.translate((-time * 100 * timeScale) % p5.width, 0);

        for (let offsetX = -p5.width; offsetX < p5.width; offsetX += p5.width) {
            p5.beginShape();
            p5.noFill();
            for (let i = 0; i < numPoints + 1; i++) {
                const t = i * dt + time;
                const y = centerY - 100 * p5.sin(2 * p5.PI * baseFrequency * t);

                const harmonicsY = harmonics.reduce((acc, harmonicValue, index) => {
                    const order = 2 * index + 3;
                    return (
                        acc +
                        harmonicValue * p5.sin(2 * p5.PI * baseFrequency * order * t)
                    );
                }, 0);

                const x = p5.map(i, 0, numPoints, 0, p5.width) + offsetX;
                p5.vertex(x, y + harmonicsY);
            }
            p5.endShape();
        }
    };

    const handleHarmonicChange = (index: number, value: number) => {
        const newHarmonics = [...harmonics];
        newHarmonics[index] = value;
        setHarmonics(newHarmonics);
    };
    return (
        <div>
            <Sketch setup={setup} draw={draw} />
            {harmonics.map((harmonic, index) => {
                const order = 2 * index + 3;
                return (
                    <div key={order}>
                        <label>
                            {order}rd Order: {harmonic}
                            <input
                                type="range"
                                min="-5"
                                max="5"
                                step="0.01"
                                value={harmonic}
                                onChange={(e) =>
                                    handleHarmonicChange(index, parseFloat(e.target.value))
                                }
                            />
                        </label>
                    </div>
                );
            })}
        </div>
    );
};

export default HarmonicGenerator;
