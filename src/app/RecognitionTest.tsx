import {h, Fragment} from "preact"
import {useState, useRef} from "preact/hooks"
import {generateChallenge} from "../domain/challenge"
import {StripView} from "./StripView"

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
  return (
    <>
      <h1>This is the view</h1>
      <div style={{background: "#888"}}>
        <div style={{display: "inline-block", width: "140px"}}>
          <StripView strip={1} />
        </div>{" "}
        <div style={{display: "inline-block", width: "140px"}}>
          <StripView strip={2} />
        </div>
      </div>
    </>
  )
}
