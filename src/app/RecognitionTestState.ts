import {Strip} from "../domain/strip"

export type UpdateFn<T> = (action: (state: T) => T) => unknown

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

export function submitResponse(
  response: Strip,
): (current: ScreenState) => ScreenState {
  return () => ({name: "feedback", response})
}
