import {shuffled} from "../lib/random"
import {Strip, chooseRecognizableStrip, strips} from "./strip"

export type Challenge = {target: Strip; grid: ExposureGrid}

export type ExposureGrid = Array<Strip>

export function generateChallenge(): Challenge {
  return {target: chooseRecognizableStrip(), grid: generateGrid()}
}

function generateGrid(): ExposureGrid {
  return shuffled(strips)
}
