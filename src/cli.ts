import { pwd } from "shelljs";
import { helpAndExit } from "./help";
// import { getConfigPath, flattenDeep } from "./util";
import { Options } from './types';
import { getFonts } from './getFonts';
import { transform } from './transform';

const args = require('yargs-parser')(process.argv.slice(2)) as Options

export async function main() {
  if (args.help) {
    helpAndExit(0)
  }
  else if(args.list){
    const s = 'Hello World, 01234567689'
    console.log(Object.values(getFonts()).map(f=>` * ${transform(s, f)} : ${f.name}`).join('\n'));
    return process.exit(0)
  }
  else if(args.font) {
    const font = getFonts()[args.font]
    if(!font){
      console.error('Cannot find font '+args.font);
      return process.exit(1)
    }
    if(args.input){
      console.log(transform(args.input, font));
      return process.exit(0)
    }
  }
  else {
    console.error('Invalid call');
    return     helpAndExit(1)
  }
}
