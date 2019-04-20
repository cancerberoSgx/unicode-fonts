import { Options } from './types';
import { getFonts } from './getFonts';
import { transform } from './transform';

const args = require('yargs-parser')(process.argv.slice(2)) as Options

export async function main() {
  if (args.help) {
    helpAndExit(0)
  }
  else if(args.list){
    const s = 'HELLO world 01234567689'
    console.log(Object.values(getFonts()).map(f=>` * ${transform(s, f, -1)} : ${f.name} (${f.description})`).join('\n'));
    return process.exit(0)
  }
  else if(args.font) {
    const font = getFonts()[args.font]
    if(!font){
      console.error('Cannot find font '+args.font);
      return process.exit(1)
    }
    let join = -1
    if(args.join){
      join = parseInt(args.join)
      if(!join || join===0||join<0||join===NaN){
        console.error('Invalid Join value, resulted on number '+join);
        process.exit(1)
      }
    }
    if(args.input){
      console.log(transform(args.input, font, join))
      return process.exit(0)
    }
  }
  else {
    console.error('Invalid call');
    return     helpAndExit(1)
  }
}

function helpAndExit(code:number=0){
  help()
  process.exit(code)
}

function help(){
console.log(`
Usage examples: 

unicode-fonts --list

unicode-fonts --font super --input "hello world 1234"

unicode-fonts --font super --input "hello world 1234" --join "0x2009"

TODO

`)
}
