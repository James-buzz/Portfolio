import { fadeBetweenColors } from '@/util/colour';
import isMobileBrowser from '@/util/mobile';
import p5Types from 'p5';
import Sketch from 'react-p5';

const Background: React.FC = () => {
  /**
   * This function sets up a P5.js canvas that fills the entire HTML document and removes the fill color from any shapes drawn on it.
   * @param p5 An object of type 'p5Types' used for drawing graphics using the P5.js library.
   * @param canvasParentRef An Element object that represents the parent element to which the canvas created by P5.js will be added.
   */
  let isMobile = false;
  let canvasConstraints = [0, 0];
  let yOffset = 0;
  let rainbowLoop = 2 + Math.random() * 250;
  let rainbowLoopIncrement = 0.1;
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    isMobile = isMobileBrowser();
    canvasConstraints = [0, window.innerWidth];
    p5.createCanvas(
      window.innerWidth,
      document.documentElement.scrollHeight
    ).parent(canvasParentRef);
    p5.noFill();
  };

  const draw = (p5: p5Types) => {
    let xOffset = 0.0;
    let step = 10;
    let backgroundClr = 'rgba(249, 250, 251, 0.005)';
    let transparent = '0.015';
    if (isMobile) {
      step = 6;
      transparent = '0.010';
      backgroundClr = 'rgba(249, 250, 251, 0.0001)';
    }
    p5.background(backgroundClr);
    // p5.js graphic
    // test
    //const rainbow = getRainbowColourAlt(rainbowLoop);
    const rainbow = fadeBetweenColors(
      { red: 0, green: 255, blue: 0 },
      { red: 0, green: 0, blue: 0 },
      rainbowLoop
    );

    p5.stroke(
      `rgba(${rainbow.red}, ${rainbow.green}, ${rainbow.blue}, ${transparent})`
    );
    p5.strokeWeight(1.5);
    p5.beginShape();
    for (
      let x = canvasConstraints[0];
      x < canvasConstraints[1] + step / 2;
      x += step
    ) {
      let y = p5.map(p5.noise(xOffset, yOffset), 0, 1, 0, canvasConstraints[1]);
      if (isMobile) {
        y *= 2;
        y += 250; // fix for mobile
      }
      p5.vertex(x, y);
      xOffset += 0.04;
    }
    yOffset += isMobile ? 0.0005 : 0.0004;
    p5.endShape();
    // Rainbow loop
    if (
      rainbowLoop + rainbowLoopIncrement > 360 ||
      rainbowLoop - rainbowLoopIncrement < 0
    ) {
      rainbowLoopIncrement = -rainbowLoopIncrement; // Reverse the direction of increment
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

export default Background;
