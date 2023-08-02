import {h, Fragment} from "preact"
import {useState, useMemo} from "preact/hooks"
import {Challenge, generateChallenge} from "../domain/challenge"
import {ExposureView} from "./ExposureView"
import {Timeout} from "../lib/Timeout"

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
  switch (state.name) {
    case "recall":
      return recallView()
    default:
      return exposureView(challenge, update)
  }
}

function exposureView(
  challenge: Challenge,
  update: UpdateFn<ScreenState>,
) {
  return (
    <>
      <ExposureView challenge={challenge} />
      <Timeout ms={1000} onExpired={() => update(hideStrips)} />
    </>
  )
}

function recallView() {
  return <h1>This is the recall view</h1>
}

function hideStrips(): ScreenState {
  return {name: "recall"}
}
