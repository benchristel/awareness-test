import {pick} from "../lib/random"

export type Strip =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35

export type StripPattern = [
  Square,
  Square,
  Square,
  Square,
  Square,
  Square,
  Square,
]

export type Square = "black" | "white"

const B = "black" as const
const _ = "white" as const
export const patterns: Record<Strip, StripPattern> = {
  1: [B, B, B, _, _, _, _],
  2: [B, B, _, B, _, _, _],
  3: [B, _, B, B, _, _, _],
  4: [_, B, B, B, _, _, _],
  5: [B, B, _, _, B, _, _],
  6: [B, _, B, _, B, _, _],
  7: [_, B, B, _, B, _, _],
  8: [B, _, _, B, B, _, _],
  9: [_, B, _, B, B, _, _],
  10: [_, _, B, B, B, _, _],
  11: [B, B, _, _, _, B, _],
  12: [B, _, B, _, _, B, _],
  13: [_, B, B, _, _, B, _],
  14: [B, _, _, B, _, B, _],
  15: [_, B, _, B, _, B, _],
  16: [_, _, B, B, _, B, _],
  17: [B, _, _, _, B, B, _],
  18: [_, B, _, _, B, B, _],
  19: [_, _, B, _, B, B, _],
  20: [_, _, _, B, B, B, _],
  21: [B, B, _, _, _, _, B],
  22: [B, _, B, _, _, _, B],
  23: [_, B, B, _, _, _, B],
  24: [B, _, _, B, _, _, B],
  25: [_, B, _, B, _, _, B],
  26: [_, _, B, B, _, _, B],
  27: [B, _, _, _, B, _, B],
  28: [_, B, _, _, B, _, B],
  29: [_, _, B, _, B, _, B],
  30: [_, _, _, B, B, _, B],
  31: [B, _, _, _, _, B, B],
  32: [_, B, _, _, _, B, B],
  33: [_, _, B, _, _, B, B],
  34: [_, _, _, B, _, B, B],
  35: [_, _, _, _, B, B, B],
}

// A "recognizable" strip is one with 7 or more local symmetries.
export function chooseRecognizableStrip(): Strip {
  return pick([15, 1, 10, 35, 6, 29, 24, 31, 20, 21, 4])
}
