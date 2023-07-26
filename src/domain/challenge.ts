import {Strip, chooseRecognizableStrip} from "./strip"

export type Challenge = {target: Strip; grid: ExposureGrid}

export type ExposureGrid = Array<Sector>
export type Sector = Array<Strip>

export function generateChallenge(): Challenge {
  return {target: chooseRecognizableStrip(), grid: generateGrid()}
}

function generateGrid(): ExposureGrid {
  return []
}
