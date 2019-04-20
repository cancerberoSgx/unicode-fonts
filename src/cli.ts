import { getFonts } from './getFonts'
import { transform } from './transform'
import { Options, Font } from './types'
import { writeFileSync } from 'fs';

const args = require('yargs-parser')(process.argv.slice(2)) as Options

export async function main() {
  if (args.help) {
    helpAndExit(0)
  } else if (args.list) {
    list();
    return process.exit(0)
  } else if (args.font) {
    const font = getFonts()[args.font]
    if (!font) {
      console.error('Cannot find font ' + args.font+'.\nThese are the ones available: ')
      list()      
      return process.exit(1)
    }
    let join = -1
    if (args.join) {
      join = parseInt(args.join)
      if (!join || join === 0 || join < 0 || join === NaN) {
        console.error('Invalid Join value, resulted on number ' + join)
        process.exit(1)
      }
    }
    if (args.input) {
      processInput(font, join, args.input);
      return process.exit(0)
    }
    else {
      // reading form stdin
      process.stdin.resume();
      process.stdin.setEncoding('utf8');
      process.stdin.on('data', function(chunk) {
        processInput(font, join, chunk)
      });
      process.stdin.on('end', function() {
          return process.exit(0)
      });
    }
  } else {
    console.error('Invalid call')
    return helpAndExit(1)
  }
}

function processInput(font: Font, join: number, input: string) {
  const result = transform(input, font, join);
  if (args.outputFile) {
    writeFileSync(args.outputFile, result);
  }
  else {
    process.stdout.write(result)
    // console.log(result);
  }
}

function list() {
  const s = 'HELLO world 01234567689';
  console.log(Object.values(getFonts())
    .map(f => ` * ${transform(s, f, -1)} : ${f.name} (${f.description})`)
    .join('\n'));
}

function helpAndExit(code: number = 0) {
  help()
  process.exit(code)
}

function help() {
  console.log(`
Usage examples: 

unicode-fonts --list

unicode-fonts --font super --input "hello world 1234"

unicode-fonts --font super --input "hello world 1234" --join "0x2009"

TODO

`)
}
