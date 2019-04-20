Transform a string to its equivalent using unicode fonts:

```
unicode-fonts --list
 * 𝐇𝐄𝐋𝐋𝐎 𝐖𝐎𝐑𝐋𝐃, 𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟔𝟖𝟗 : bold
 * 𝐻𝐸𝐿𝐿𝑂 𝑊𝑂𝑅𝐿𝐷, 01234567689 : italic
 * 𝑯𝑬𝑳𝑳𝑶 𝑾𝑶𝑹𝑳𝑫, 01234567689 : boldItalic
 * He𝒧𝒧o 𝒲o𝒭𝒧𝒟, 01234567689 : scriptItalic
 * 𝓗𝓔𝓛𝓛𝓞 𝓦𝓞𝓡𝓛𝓓, 01234567689 : scriptBold
 * H𝔈𝔏𝔏𝔒 𝔚𝔒𝔕𝔏𝔇, 01234567689 : fraktur
 * 𝕳𝕰𝕷𝕷𝕺 𝖂𝕺𝕽𝕷𝕯, 01234567689 : boldFraktur
 * H𝔼𝕃𝕃𝕆 𝕎𝕆𝕉𝕃𝔻, 𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟞𝟠𝟡 : doubleStruck
 * 𝖧𝖤𝖫𝖫𝖮 𝖶𝖮𝖱𝖫𝖣, 𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟨𝟪𝟫 : sansSerif
 * 𝗛𝗘𝗟𝗟𝗢 𝗪𝗢𝗥𝗟𝗗, 𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟲𝟴𝟵 : sansSerifBold
 * 𝘏𝘌𝘓𝘓𝘖 𝘞𝘖𝘙𝘓𝘋, 01234567689 : sansSerifItalic
 * 𝙃𝙀𝙇𝙇𝙊 𝙒𝙊𝙍𝙇𝘿, 01234567689 : sansSerifBoldItalic
 * 𝙷𝙴𝙻𝙻𝙾 𝚆𝙾𝚁𝙻𝙳, 𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟼𝟾𝟿 : monospace
 * ᴴᴱᴸᴸᴼ ᵂᴼᴿᴸᴰ, ⁰¹²³⁴⁵⁶⁷⁶⁸⁹ : super
 * 🄗🄔🄛🄛🄞 🄦🄞🄡🄛🄓, 0⑴⑵⑶⑷⑸⑹⑺⑹⑻⑼ : parenthesized
 * ⒽⒺⓁⓁⓄ ⓌⓄⓇⓁⒹ, 0①②③④⑤⑥⑦⑥⑧⑨ : circled
 * 🄷🄴🄻🄻🄾 🅆🄾🅁🄻🄳, 01234567689 : squaredCapital
 * 🅗🅔🅛🅛🅞 🅦🅞🅡🅛🅓, 01234567689 : negativeCircledCapital
 * 🅷🅴🅻🅻🅾 🆆🅾🆁🅻🅳, 01234567689 : negativeSquaredCapital
 * 🇭🇪🇱🇱🇴 🇼🇴🇷🇱🇩, 01234567689 : regionalIndicatorSymbol
 * ＨＥＬＬＯ ＷＯＲＬＤ, ０１２３４５６７６８９ : fullWidth
 * ꓧꓰꓡꓡꓳ ꓪꓳꓣꓡꓓ, 01234567689 : myanmar
 * ᎻᎬᏞᏞᎤ ᏔᎤᎡᏞᎠ, ᎾᏐ23Ꮞ5Ꮾ7Ꮾ8Ꮽ : cherokee
 * Hello World, ⅠⅡⅢⅣⅤⅥⅦⅧⅦⅨⅩ : romanNumerals
 * Hello World, ⅳⅴⅵⅶⅷⅸⅹⅺⅹⅻⅼ : romanNumeralsSmall
```

Explanation: unicode charset supports extra font families, so we replace normal character 'a' (char code 97) with character '𝓪' (char code 55349). So this are not currently font families or different fonts, it's the same font, that provides this special characters, some of them. 

Note: these are not using any ansi escape sequences. We could use those to add colors, bold, underline, etc in the command line. 

Some Unicode categories that contain these type of characters are: 

 * Mathematical Alphanumeric Symbols

# Usage
## Install

```
npm i -g unicode-fonts
```

## CLI
```
unicode-fonts --list
unicode-fonts --font scriptItalic --input "My name is Sebastian Gurin"
cat package.json | unicode-fonts --font boldItalic
cat package.json | unicode-fonts --font circled --join "0x3000" --outputFile package-boldItalic.json
```

## API

```ts
const fonts = getFonts()
const s = transform('Hello', fonts['scriptItalic'])
```

## Options

Both CLI and API supports the same options

 * if no `input` is given, then it will read from stdin
 * if no `outputFile` is given then it will write to stdout
 * `font` is required. use `list` to see the available fonts

# Join

The option `join` will join the characters with given character. Take the following examples with different space characters: 


## no join
```
unicode-fonts --input "abcdefXZYUPO91234 hello WORLD" --font circled
ⒶⒷⒸⒹⒺⒻⓍZⓎⓊⓅⓄ⑨①②③④ ⒽⒺⓁⓁⓄ ⓌⓄⓇⓁⒹ
```
## thin space
```
unicode-font --input "abcdefXZYUPO91234 hello WORLD" --font circled --join "0x2009"
Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓧ Z Ⓨ Ⓤ Ⓟ Ⓞ ⑨ ① ② ③ ④   Ⓗ Ⓔ Ⓛ Ⓛ Ⓞ   Ⓦ Ⓞ Ⓡ Ⓛ Ⓓ 
```
## ideographic space
```
unicode-fonts --input "abcdefXZYUPO91234 hello WORLD" --font circled --join "0x3000" # hair space
Ⓐ　Ⓑ　Ⓒ　Ⓓ　Ⓔ　Ⓕ　Ⓧ　Z　Ⓨ　Ⓤ　Ⓟ　Ⓞ　⑨　①　②　③　④　 　Ⓗ　Ⓔ　Ⓛ　Ⓛ　Ⓞ　 　Ⓦ　Ⓞ　Ⓡ　Ⓛ　Ⓓ
```
## zero width space
```
unicode-fonts --input "abcdefXZYUPO91234 hello WORLD" --font circled --join "0x200b"
Ⓐ​Ⓑ​Ⓒ​Ⓓ​Ⓔ​Ⓕ​Ⓧ​Z​Ⓨ​Ⓤ​Ⓟ​Ⓞ​⑨​①​②​③​④​ ​Ⓗ​Ⓔ​Ⓛ​Ⓛ​Ⓞ​ ​Ⓦ​Ⓞ​Ⓡ​Ⓛ​Ⓓ
```

## backspace
```
unicode-fonts  --input "abcdefXZYUPO91234 hello WORLD" --font circled --join "0x0008"
Ⓓ
```

# WARNING

In general it's a bad idea to use these characters to store text. The only useful situatoin where you would want to store text using these, is if you want to prevent text searches to find a string.

These characters should be only used to render normal text in mediums with limited fonts, like a terminal. 

# TODO

[TODO.md](TODO.md)