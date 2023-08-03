import {h, Fragment} from "preact"
import {useState, useMemo} from "preact/hooks"
import {Challenge, generateChallenge} from "../domain/challenge"
import {GridView} from "./GridView"
import {Timeout} from "../lib/Timeout"
import {unreachable} from "../lib/unreachable"
import {StripView} from "./StripView"
import {GhostStripView} from "./GhostStripView"
import {Strip} from "../domain/strip"

export function RecognitionTest() {
  const challenge = useMemo(generateChallenge, [])
  const [state, update] = useState(initialState)

  switch (state.name) {
    case "recall":
      return recallScreen(challenge, update)
    case "exposure":
      return exposureScreen(challenge, update)
    case "feedback":
      return feedbackScreen(challenge, state)
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
        {(strip) => <StripView strip={strip} />}
      </GridView>
      <Timeout ms={1000} onExpired={() => update(hideStrips)} />
    </>
  )
}

function recallScreen(
  challenge: Challenge,
  update: UpdateFn<ScreenState>,
) {
  return (
    <GridView challenge={challenge}>
      {(strip) => (
        <GhostStripView
          onClick={() => update(submitResponse(strip))}
        />
      )}
    </GridView>
  )
}

function feedbackScreen(
  challenge: Challenge,
  state: Extract<ScreenState, {name: "feedback"}>,
) {
  const message =
    challenge.target === state.response ? "Correct!" : "Nope."
  return <p>{message}</p>
}

type UpdateFn<T> = (action: (state: T) => T) => unknown

type ScreenState =
  | {name: "exposure"}
  | {name: "recall"}
  | {name: "feedback"; response: Strip}

function initialState(): ScreenState {
  return {name: "exposure"}
}

function hideStrips(): ScreenState {
  return {name: "recall"}
}

function submitResponse(
  response: Strip,
): (current: ScreenState) => ScreenState {
  return () => ({name: "feedback", response})
}
