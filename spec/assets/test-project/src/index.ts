import { getFonts, transform } from 'unicode-fonts'

console.log(Object.values(getFonts()).map(f => f.name))

console.log(transform('Fraktur is almost nun intelligible', getFonts()['boldFraktur']))
