import { buildFont } from './buildFont';
import { Font } from './types';

export function getFonts() {
  if (!fonts) {
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    fonts = {};
    fonts['bold'] = buildFont(0x1d400, 0x1d41a, 0x1d7ce, [], 'bold', 'Mathematical Alphanumeric Symbols');
    fonts['italic'] = buildFont(0x1d434, 0x1d44e, 0, [...digits], 'italic', 'From Unicode category "Mathematical Alphanumeric Symbols"');
    fonts['boldItalic'] = buildFont(0x1d468, 0x1d482, 0, [...digits], 'boldItalic', 'From Unicode category "Mathematical Alphanumeric Symbols"');
    fonts['scriptItalic'] = buildFont(0x1d49c, 0x1d4b6, 0, ['e', 'g', 'o', 'B', 'F', 'H', 'I', 'L', 'M', 'R', ...digits], 'scriptItalic', 'From Unicode category "Mathematical Alphanumeric Symbols"');
    fonts['scriptBold'] = buildFont(0x1d4d0, 0x1d4ea, 0, [...digits], 'scriptBold', 'From Unicode category "Mathematical Alphanumeric Symbols"');
    fonts['fraktur'] = buildFont(0x1d504, 0x1d51e, 0, ['C', 'H', 'R', ...digits], 'fraktur', 'From Unicode category "Mathematical Alphanumeric Symbols"');
    fonts['boldFraktur'] = buildFont(0x1d56c, 0x1d586, 0, digits, 'boldFraktur', 'From Unicode category "Mathematical Alphanumeric Symbols"');
    fonts['doubleStruck'] = buildFont(0x1d538, 0x1d552, 0x1d7d8, ['C', 'H', 'R', 'P', 'Q'], 'doubleStruck', 'From Unicode category "Mathematical Alphanumeric Symbols"');
    fonts['sansSerif'] = buildFont(0x1d5a0, 0x1d5ba, 0x1d7e2, [], 'sansSerif', 'From Unicode category "Mathematical Alphanumeric Symbols"');
    fonts['sansSerifBold'] = buildFont(0x1d5d4, 0x1d5ee, 0x1d7ec, [], 'sansSerifBold', 'From Unicode category "Mathematical Alphanumeric Symbols"');
    fonts['sansSerifItalic'] = buildFont(0x1d608, 0x1d622, 0, [...digits], 'sansSerifItalic', 'From Unicode category "Mathematical Alphanumeric Symbols"');
    fonts['sansSerifBoldItalic'] = buildFont(0x1d63c, 0x1d656, 0, [...digits], 'sansSerifBoldItalic', 'From Unicode category "Mathematical Alphanumeric Symbols"');
    fonts['monospace'] = buildFont(0x1d670, 0x1d68a, 0x1d7f6, [], 'monospace', 'From Unicode category "Mathematical Alphanumeric Symbols"');
  }
  return fonts!
}
let fonts: {
  [name: string]: Font;
};
