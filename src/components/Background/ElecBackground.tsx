import { fadeBetweenColors } from '@/util/colour';
import isMobileBrowser from '@/util/mobile';
import p5Types from 'p5';
import Sketch from 'react-p5';

const ElecBackground: React.FC = () => {
    let isMobile = false;
    let rainbowLoop = 2 + Math.random() * 250;
    let rainbowLoopIncrement = 0.1;
    let clusterCount = 6;

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        isMobile = isMobileBrowser();
        p5.createCanvas(
            window.innerWidth,
            document.documentElement.scrollHeight
        ).parent(canvasParentRef);
        p5.noFill();
    };

    const drawMountain = (p5: p5Types, baseX: number, baseY: number, color: string) => {
        p5.stroke(color);
        p5.strokeWeight(1);

        let angle = p5.random(0, p5.TWO_PI);
        let xOffset = p5.cos(angle) * p5.random(0.5, 1.5);
        let yOffset = p5.sin(angle) * p5.random(0.5, 1.5);

        p5.beginShape();
        for (let x = -50; x < 50; x++) {
            let y = p5.map(
                p5.noise(baseX + xOffset, baseY + yOffset),
                0,
                1,
                -20,
                20
            );
            p5.vertex(baseX + x, baseY + y);
            xOffset += 0.1;
            yOffset += 0.1;
        }
        p5.endShape(p5.CLOSE);
    };

    const draw = (p5: p5Types) => {
        p5.background(249, 250, 251, 10);

        const rainbow = fadeBetweenColors(
            { red: 0, green: 255, blue: 0 },
            { red: 0, green: 0, blue: 0 },
            rainbowLoop
        );

        const color = `rgba(${rainbow.red}, ${rainbow.green}, ${rainbow.blue}, 0.1)`;

        for (let i = 0; i < clusterCount; i++) {
            let baseX = p5.random(0, p5.width);
            let baseY = p5.random(0, p5.height);
            drawMountain(p5, baseX, baseY, color);
        }

        if (
            rainbowLoop + rainbowLoopIncrement > 360 ||
            rainbowLoop - rainbowLoopIncrement < 0
        ) {
            rainbowLoopIncrement = -rainbowLoopIncrement;
        }
        rainbowLoop += rainbowLoopIncrement;
    };

    const resize = (p5: p5Types) => {
        if (!isMobileBrowser())
            p5.resizeCanvas(window.innerWidth, document.documentElement.scrollHeight);
    };

    return (
        <Sketch
            className="absolute top-0 left-0 z-0 w-full overflow-hidden"
            windowResized={resize}
            setup={setup}
            draw={draw}
        />
    );
};

export default ElecBackground;
