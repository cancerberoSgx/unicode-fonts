Transform a string to its equivalent using unicode fonts:

```
Hello world, How are you today 0123456789
𝐇𝐞𝐥𝐥𝐨 𝐖𝐨𝐫𝐥𝐝. 𝐇𝐨𝐰 𝐚𝐫𝐞 𝐲𝐨𝐮 𝐭𝐨𝐝𝐚𝐲 𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗
𝐻𝑒𝑙𝑙𝑜 𝑊𝑜𝑟𝑙𝑑. 𝐻𝑜𝑤 𝑎𝑟𝑒 𝑦𝑜𝑢 𝑡𝑜𝑑𝑎𝑦 0123456789
𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅. 𝑯𝒐𝒘 𝒂𝒓𝒆 𝒚𝒐𝒖 𝒕𝒐𝒅𝒂𝒚 0123456789
He𝓁𝓁o 𝒲o𝓇𝓁𝒹. Ho𝓌 𝒶𝓇e 𝓎o𝓊 𝓉o𝒹𝒶𝓎 0123456789
𝓗𝓮𝓵𝓵𝓸 𝓦𝓸𝓻𝓵𝓭. 𝓗𝓸𝔀 𝓪𝓻𝓮 𝔂𝓸𝓾 𝓽𝓸𝓭𝓪𝔂 0123456789
H𝔢𝔩𝔩𝔬 𝔚𝔬𝔯𝔩𝔡. H𝔬𝔴 𝔞𝔯𝔢 𝔶𝔬𝔲 𝔱𝔬𝔡𝔞𝔶 0123456789
𝕳𝖊𝖑𝖑𝖔 𝖂𝖔𝖗𝖑𝖉. 𝕳𝖔𝖜 𝖆𝖗𝖊 𝖞𝖔𝖚 𝖙𝖔𝖉𝖆𝖞 0123456789
H𝕖𝕝𝕝𝕠 𝕎𝕠𝕣𝕝𝕕. H𝕠𝕨 𝕒𝕣𝕖 𝕪𝕠𝕦 𝕥𝕠𝕕𝕒𝕪 𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡
𝖧𝖾𝗅𝗅𝗈 𝖶𝗈𝗋𝗅𝖽. 𝖧𝗈𝗐 𝖺𝗋𝖾 𝗒𝗈𝗎 𝗍𝗈𝖽𝖺𝗒 𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫
𝗛𝗲𝗹𝗹𝗼 𝗪𝗼𝗿𝗹𝗱. 𝗛𝗼𝘄 𝗮𝗿𝗲 𝘆𝗼𝘂 𝘁𝗼𝗱𝗮𝘆 𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵
𝘏𝘦𝘭𝘭𝘰 𝘞𝘰𝘳𝘭𝘥. 𝘏𝘰𝘸 𝘢𝘳𝘦 𝘺𝘰𝘶 𝘵𝘰𝘥𝘢𝘺 0123456789
𝙃𝙚𝙡𝙡𝙤 𝙒𝙤𝙧𝙡𝙙. 𝙃𝙤𝙬 𝙖𝙧𝙚 𝙮𝙤𝙪 𝙩𝙤𝙙𝙖𝙮 0123456789
```

Explanation: unicode charset supports extra font families, so we replace normal character 'a' (char code 97) with character '𝓪' (char code 55349). So this are not currently font families or different fonts, it's the same font, that provides this special characters, some of them. 

Note: these are not using any ansi escape sequences. We could use those to add colors, bold, underline, etc in the command line. 

Some Unicode categories that contain these type of characters are: 

 * Mathematical Alphanumeric Symbols

# Usage
# #Install

```
npm i -g unicode-fonts
```

## CLI
```
unicode-fonts --list
unicode-fonts --font scriptItalic --input "My name is Sebastian Gurin"
```

## API

```ts
const fonts = getFonts()
const s = transform('Hello', fonts['scriptItalic'])
```

# WARNING

In general it's a bad idea to use these characters to store text. The only useful situatoin where you would want to store text using these, is if you want to prevent text searches to find a string.

These characters should be only used to render normal text in mediums with limited fonts, like a terminal. 

# TODO

 * input form stdin

# Ideas

 * JavaScript source code transformation that format Identifiers. Variable identifiers with font1, type identifiers with font2, property / member identifiers with font3, parameter identifiers w font4... etc


<!-- 
 * app for change font family ?  Unicode has various fonts : mathematical script, franktur, double struc, sans serif, italic, monospace, and other strange : lisu letter  ... and we can use similars from cherokee. mathematical alphanumeric symbols
     * similar to previous : vertical text ? vertical forms, compatibilty forms
     * phonetic extensions  , also has
     * latin extended aditional - adds symbols below, on top of letters - could taken as effects ?
     * number forms : has formats for numbers... romans... 
     * enclosed alphnumerics
     enclosed ideographic
     * latin extended c
     * half width and full width forms
 -->
