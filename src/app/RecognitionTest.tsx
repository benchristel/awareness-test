import {h} from "preact"
import {useState, useRef} from "preact/hooks"
import {generateChallenge} from "../domain/challenge"
import {ExposureScreen} from "./ExposureScreen"

export function RecognitionTest() {
  const challenge$ = useRef(generateChallenge())
  const [state, update] = useState(initialState)
  return view(state, update)
}

type ScreenState =
  | {name: "training"}
  | {name: "countdown"; secondsRemaining: number}
  | {name: "exposure"}
  | {name: "recall"}

function initialState(): ScreenState {
  return {name: "training"}
}

type UpdateFn<T> = (action: (state: T) => T) => unknown

function view(state: ScreenState, update: UpdateFn<ScreenState>) {
  return <ExposureScreen />
}
