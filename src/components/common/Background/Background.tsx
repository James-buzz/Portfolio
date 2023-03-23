import p5Types from 'p5';
import React, { useState } from 'react';
import Sketch from 'react-p5';

type Point = {
  x: number;
  y: number;
  color?: p5Types.Color;
};

interface BackgroundProps {
  speed: number;
}

const Background: React.FC<BackgroundProps> = ({ speed }) => {
  const [points, setPoints] = useState<Point[]>([]);
  const [currentPos, setCurrentPos] = useState<Point>({ x: 0, y: 0 });
  const easing = 0.05;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(window.innerWidth, document.documentElement.scrollHeight).parent(canvasParentRef);
    p5.frameRate(speed);
  };

  const draw = (p5: p5Types) => {
    p5.background(249, 250, 251, 50);

    const dx = p5.mouseX - currentPos.x;
    const dy = p5.mouseY - currentPos.y;

    setCurrentPos({
      x: currentPos.x + dx * easing,
      y: currentPos.y + dy * easing,
    });

    const newPoint: Point = {
      x: currentPos.x,
      y: currentPos.y,
      color: p5.color(p5.lerp(100, 200, p5.noise(currentPos.x * 0.01, currentPos.y * 0.01)), 25),
    };

    setPoints((prevPoints) => [...prevPoints, newPoint]);

    p5.push();
    p5.noFill();
    p5.strokeWeight(5);
    p5.beginShape();

    points.forEach((point) => {
      if (point.color) p5.stroke(point.color);
      p5.vertex(point.x, point.y);
    });

    p5.endShape();
    p5.pop();

    // Limit the number of points
    if (points.length > 100) {
      setPoints((prevPoints) => prevPoints.slice(1));
    }
  };

  const resize = (p5: p5Types) => {
    p5.resizeCanvas(window.innerWidth, document.documentElement.scrollHeight);
  };

  return (
    <Sketch
      className="absolute top-0 left-0 overflow-hidden"
      // @ts-ignore
      setup={setup}
      // @ts-ignore
      draw={draw}
      // @ts-ignore
      windowResized={resize}
      style={{ width: '100%' }}
    />
  );
};

export default Background;
