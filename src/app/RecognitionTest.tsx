import {h} from "preact"
import {useState, useMemo} from "preact/hooks"
import {Challenge, generateChallenge} from "../domain/challenge"
import {ExposureScreen} from "./ExposureScreen"

export function RecognitionTest() {
  const challenge = useMemo(generateChallenge, [])
  const [state, update] = useState(initialState)
  return view(state, challenge, update)
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

function view(
  state: ScreenState,
  challenge: Challenge,
  update: UpdateFn<ScreenState>,
) {
  return <ExposureScreen challenge={challenge} />
}
