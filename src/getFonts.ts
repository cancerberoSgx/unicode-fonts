import { buildFont } from './buildFont';
import { Font } from './types';

export function getFonts() {
  if (!fonts) {
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    fonts = {};
    fonts['bold'] = buildFont(0x1d400, 0x1d41a, 0x1d7ce, []);
    fonts['italic'] = buildFont(0x1d434, 0x1d44e, 0, [...digits]);
    fonts['boldItalic'] = buildFont(0x1d468, 0x1d482, 0, [...digits]);
    fonts['scriptItalic'] = buildFont(0x1d49c, 0x1d4b6, 0, ['e', 'g', 'o', 'B', 'F', 'H', 'I', 'L', 'M', 'R', ...digits]);
    fonts['scriptBold'] = buildFont(0x1d4d0, 0x1d4ea, 0, [...digits]);
    fonts['fraktur'] = buildFont(0x1d504, 0x1d51e, 0, ['C', 'H', 'R', ...digits]);
    fonts['boldFraktur'] = buildFont(0x1d56c, 0x1d586, 0, digits);
    fonts['doubleStruck'] = buildFont(0x1d538, 0x1d552, 0x1d7d8, ['C', 'H', 'R', 'P', 'Q']);
    fonts['sansSerif'] = buildFont(0x1d5a0, 0x1d5ba, 0x1d7e2, []);
    fonts['sansSerifBold'] = buildFont(0x1d5d4, 0x1d5ee, 0x1d7ec, []);
    fonts['sansSerifItalic'] = buildFont(0x1d608, 0x1d622, 0, [...digits]);
    fonts['sansSerifBoldItalic'] = buildFont(0x1d63c, 0x1d656, 0, [...digits]);
    fonts['monospace'] = buildFont(0x1d670, 0x1d68a, 0x1d7f6, []);
  }
  return fonts!
}
let fonts: {
  [name: string]: Font;
};
