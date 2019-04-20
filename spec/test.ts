import { getFonts } from '../src/getFonts'
import { transform } from '../src/transform'
const s = 'Hello World. How are you today 0123456789'
const fonts = getFonts()
console.log(s)
console.log(transform(s, fonts.bold))
console.log(transform(s, fonts.italic))
console.log(transform(s, fonts.boldItalic))
console.log(transform(s, fonts.scriptItalic))
console.log(transform(s, fonts.scriptBold))
console.log(transform(s, fonts.fraktur))
console.log(transform(s, fonts.boldFraktur))
console.log(transform(s, fonts.doubleStruck))
console.log(transform(s, fonts.sansSerif))
console.log(transform(s, fonts.sansSerifBold))
console.log(transform(s, fonts.sansSerifItalic))
console.log(transform(s, fonts.sansSerifBoldItalic))
