import {h, Fragment} from "preact"
import {useState, useMemo} from "preact/hooks"
import {Challenge, generateChallenge} from "../domain/challenge"
import {ExposureView} from "./ExposureView"
import {Timeout} from "../lib/Timeout"

export function RecognitionTest() {
  const challenge = useMemo(generateChallenge, [])
  const [state, update] = useState(initialState)

  switch (state.name) {
    case "recall":
      return recallView()
    case "exposure":
      return exposureView(challenge, update)
    default:
      throw "Unhandled RecognitionTest state " + state.name
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

type UpdateFn<T> = (action: (state: T) => T) => unknown

type ScreenState =
  | {name: "training"}
  | {name: "countdown"; secondsRemaining: number}
  | {name: "exposure"}
  | {name: "recall"}

function initialState(): ScreenState {
  return {name: "exposure"}
}

function hideStrips(): ScreenState {
  return {name: "recall"}
}
