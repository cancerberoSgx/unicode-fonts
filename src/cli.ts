import { appendFileSync } from 'fs'
import { getFonts } from './getFonts'
import { transform } from './transform'
import { Font, Options } from './types'

const args = require('yargs-parser')(process.argv.slice(2)) as Options

export async function main() {
  if (args.help) {
    help()
    return process.exit(0)
  } else if (args.list) {
    list()
    return process.exit(0)
  } else if (args.font) {
    const font = getFonts()[args.font]
    if (!font) {
      console.error('Cannot find font ' + args.font + '.\nThese are the ones available: ')
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
      processInput(font, join, args.input)
      return process.exit(0)
    } else {
      process.stdin.resume()
      process.stdin.setEncoding('utf8')
      process.stdin.on('data', function(chunk) {
        processInput(font, join, chunk)
      })
      process.stdin.on('end', function() {
        return process.exit(0)
      })
    }
  } else {
    console.error('Invalid call')
    help()
    return process.exit(1)
  }
}

function processInput(font: Font, join: number, input: string) {
  const result = transform(input, font, join)
  if (args.outputFile) {
    appendFileSync(args.outputFile, result)
  } else {
    process.stdout.write(result)
  }
}

function list() {
  const s = 'HELLO world 01234567689'
  console.log(
    Object.values(getFonts())
      .map(f => ` * ${transform(s, f, -1)} : ${f.name} (${f.description})`)
      .join('\n')
  )
}

function help() {
  console.log(`
Usage examples: 

  unicode-fonts --list
  unicode-fonts --font scriptItalic --input "My name is Sebastian Gurin"
  cat package.json | unicode-fonts --font boldItalic
  cat package.json | unicode-fonts --font circled --join "0x3000" --outputFile package-boldItalic.json

  --list: list supported fonts
  --font (mandatory) a supported font name to format input
  --input (optional) a string to format. If not provided it will read from stdin
  --join (optional) if given it will join characters with that character. Must be 
    a single character in hexadecimal format, ej: "0x2009". See README for more 
    details. If not provided, there will be no join
  --outputFile if provided it will write the output to given file. If not provided it will write to stdout.
`)
}
