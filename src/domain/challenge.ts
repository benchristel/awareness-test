export type Challenge = {target: Strip; grid: ExposureGrid}

export type Strip = Array<Cell>
export type Cell = "black" | "white"

export type ExposureGrid = Array<Sector>
export type Sector = Array<Strip>

export function generateChallenge(): Challenge {
  return {target: chooseRecognizableStrip(), grid: generateGrid()}
}

function chooseRecognizableStrip(): Strip {
  return []
}

function generateGrid(): ExposureGrid {
  return []
}
