export function buildFont(aMayus: number, aLower: number, digit0: number, missing: string[] = []) {
  const font: number[][] = [];
  for (let i = 65; i < 90; i++) {
    font.push([i, aMayus + i - 65]);
  }
  for (let i = 97; i < 122; i++) {
    font.push([i, aLower + i - 97]);
  }
  for (let i = 48; i < 58; i++) {
    font.push([i, digit0 + i - 48]);
  }
  digit0;
  return { chars: font, missing: missing };
}
