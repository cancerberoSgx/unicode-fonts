import { Font } from './types'

export function transform(s: string, font: Font, join: number = -1) {
  const output: string[] = []
  for (let i = 0; i < s.length; i++) {
    if (font.missing.includes(s[i])) {
      output.push(s[i])
    } else {
      const c = s.charCodeAt(i)
      const n = font.chars.find(a => a[0] === c)!
      if (!n) {
        output.push(s[i])
      } else {
        try {
          const o = String.fromCodePoint(n[1])
          output.push(o)
        } catch (ex) {
          console.log('Error in character ', n, String.fromCodePoint(n[0]), 'of font', font.name)
          output.push(s[i])
        }
      }
    }
  }
  return output.join(join < 0 ? '' : String.fromCodePoint(join))
}
