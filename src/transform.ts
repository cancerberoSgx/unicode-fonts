import { Font } from './types';

export function transform(s: string, font: Font) {
  let output = '';
  for (let i = 0; i < s.length; i++) {
    if(font.missing.includes(s[i])){
      output+=s[i]
    }
    else {
      const c = s.charCodeAt(i);
      const n = font.chars.find(a => a[0] === c)!;
      if (!n) {
        output += s[i];
      }
      else {
        const o = String.fromCodePoint(n[1]);
        output += o;
      }
    }
  }
  return output;
}