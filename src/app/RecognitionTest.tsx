import {h, Fragment} from "preact"
import {useState, useMemo} from "preact/hooks"
import {Challenge, generateChallenge} from "../domain/challenge"
import {GridView} from "./GridView"
import {Timeout} from "../lib/Timeout"
import {unreachable} from "../lib/unreachable"
import {StripView} from "./StripView"
import {GhostStripView} from "./GhostStripView"
import {
  FeedbackState,
  UpdateFn,
  hideStrips,
  init,
  submitResponse,
} from "./RecognitionTestState"

export function RecognitionTest() {
  const challenge = useMemo(generateChallenge, [])
  const [state, update] = useState(init)

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

function exposureScreen(challenge: Challenge, update: UpdateFn) {
  return (
    <>
      <GridView challenge={challenge}>
        {(strip) => <StripView strip={strip} />}
      </GridView>
      <Timeout ms={1000} onExpired={() => update(hideStrips)} />
    </>
  )
}

function recallScreen(challenge: Challenge, update: UpdateFn) {
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

function feedbackScreen(challenge: Challenge, state: FeedbackState) {
  const message =
    challenge.target === state.response ? "Correct!" : "Nope."
  return <p>{message}</p>
}
