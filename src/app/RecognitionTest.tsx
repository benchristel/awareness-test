import {h, Fragment} from "preact"
import {useState, useMemo} from "preact/hooks"
import {Challenge, generateChallenge} from "../domain/challenge"
import {GridView} from "./GridView"
import {Timeout} from "../lib/Timeout"
import {unreachable} from "../lib/unreachable"
import {StripView} from "./StripView"

export function RecognitionTest() {
  const challenge = useMemo(generateChallenge, [])
  const [state, update] = useState(initialState)

  switch (state.name) {
    case "recall":
      return recallScreen(challenge)
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
      <GridView challenge={challenge}>
        {(strip) => <StripView strip={strip} ghost={false} />}
      </GridView>
      <Timeout ms={1000} onExpired={() => update(hideStrips)} />
    </>
  )
}

function recallScreen(challenge: Challenge) {
  return (
    <GridView challenge={challenge}>
      {(strip) => <StripView strip={strip} ghost={true} />}
    </GridView>
  )
}

type UpdateFn<T> = (action: (state: T) => T) => unknown

type ScreenState = {name: "exposure"} | {name: "recall"}

function initialState(): ScreenState {
  return {name: "exposure"}
}

function hideStrips(): ScreenState {
  return {name: "recall"}
}
