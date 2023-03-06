interface RGB {
  red: number;
  green: number;
  blue: number;
}
interface HSL {
  hue: number;
  saturation: number;
  lightness: number;
}

const getRainbowColour = (percentage: number): RGB => {
  // Convert percentage to angle in degrees
  const angle = (percentage / 100) * 360;

  // Calculate RGB values based on angle
  const red = Math.round(Math.sin((angle * Math.PI) / 180 + 0) * 127 + 128);
  const green = Math.round(Math.sin((angle * Math.PI) / 180 + 2) * 127 + 128);
  const blue = Math.round(Math.sin((angle * Math.PI) / 180 + 4) * 127 + 128);

  return {
    red,
    green,
    blue,
  };
};

/**
 * This function takes an RGB color object as input and returns an HSL color object.
 * The conversion algorithm is based on the standard formula for converting RGB to HSL.
 * @param percentage
 * @returns
 */
const getRainbowColourAlt = (percentage: number): RGB => {
  let rainbowClr = getRainbowColour(percentage);

  // let hsl = RGBtoHSL(rainbowClr);
  // hsl.saturation = 100;
  // hsl.lightness = 54;
  // let rgb = HSLtoRGB(hsl);

  return rainbowClr;
};

const HSLtoRGB = (hsl: HSL): RGB => {
  const h = hsl.hue / 360;
  const s = hsl.saturation / 100;
  const l = hsl.lightness / 100;

  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    red: Math.round(r * 255),
    green: Math.round(g * 255),
    blue: Math.round(b * 255),
  };
};

/**
 * This function takes an RGB color object as input and returns an HSL color object.
 * The conversion algorithm is based on the standard formula for converting RGB to HSL.
 * The Math.round function is used to round the values to the nearest integer.
 * @param rgb
 * @returns
 */
const RGBtoHSL = (rgb: RGB): HSL => {
  const r = rgb.red / 255;
  const g = rgb.green / 255;
  const b = rgb.blue / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        h = 0;
        break;
    }
    h /= 6;
  }

  return {
    hue: Math.round(h * 360),
    saturation: Math.round(s * 100),
    lightness: Math.round(l * 100),
  };
};

export { getRainbowColour, getRainbowColourAlt };
