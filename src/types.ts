export interface Font {
  chars: number[][];
  missing: string[];
  name: string
  description: string
}
export interface Options {
help?: boolean
list?: boolean
font?: string
input?: string
join?: string
}