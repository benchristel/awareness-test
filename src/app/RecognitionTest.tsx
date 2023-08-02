import {h, Fragment} from "preact"
import {useState, useMemo} from "preact/hooks"
import {Challenge, generateChallenge} from "../domain/challenge"
import {ExposureView} from "./ExposureView"
import {Timeout} from "../lib/Timeout"
import {unreachable} from "../lib/unreachable"

export function RecognitionTest() {
  const challenge = useMemo(generateChallenge, [])
  const [state, update] = useState(initialState)

  switch (state.name) {
    case "recall":
      return recallScreen()
    case "exposure":
      return exposureScreen(challenge, update)
    default:
      throw unreachable(
        "recognition test state",
        state,
        (s) => s.name,
      )
  }
}

function exposureScreen(
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

function recallScreen() {
  return <h1>This is the recall view</h1>
}

type UpdateFn<T> = (action: (state: T) => T) => unknown

type ScreenState = {name: "exposure"} | {name: "recall"}

function initialState(): ScreenState {
  return {name: "exposure"}
}

function hideStrips(): ScreenState {
  return {name: "recall"}
}
