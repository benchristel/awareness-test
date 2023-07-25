import {h} from "preact"
import {useState, useRef} from "preact/hooks"

export function RecognitionTest() {
  const challenge$ = useRef(generateChallenge())
  const [state, update] = useState(initialState)
  return view(state, update)
}

type Challenge = {target: Strip; grid: ExposureGrid}

type ScreenState =
  | {name: "training"}
  | {name: "countdown"; secondsRemaining: number}
  | {name: "exposure"}
  | {name: "recall"}

type Strip = Array<Cell>
type Cell = "black" | "white"

type ExposureGrid = Array<Sector>
type Sector = Array<Strip>

function initialState(): ScreenState {
  return {name: "training"}
}

type UpdateFn<T> = (action: (state: T) => T) => unknown

function view(state: ScreenState, update: UpdateFn<ScreenState>) {
  return <h1>This is the view</h1>
}

function generateChallenge(): Challenge {
  return {target: chooseRecognizableStrip(), grid: generateGrid()}
}

function chooseRecognizableStrip(): Strip {
  return []
}

function generateGrid(): ExposureGrid {
  return []
}
