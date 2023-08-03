import {Strip} from "../domain/strip"

export type Action = (current: ScreenState) => ScreenState

export type UpdateFn = (action: Action) => unknown

export type ScreenState =
  | {name: "exposure"}
  | {name: "recall"}
  | {name: "feedback"; response: Strip}

export function initialState(): ScreenState {
  return {name: "exposure"}
}

export function hideStrips(): ScreenState {
  return {name: "recall"}
}

export function submitResponse(response: Strip): Action {
  return () => ({name: "feedback", response})
}
