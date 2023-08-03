import {Strip} from "../domain/strip"

export type Action = (current: ScreenState) => ScreenState

export type UpdateFn = (action: Action) => unknown

export type ScreenState = ExposureState | RecallState | FeedbackState

export type ExposureState = {name: "exposure"}
export type RecallState = {name: "recall"}
export type FeedbackState = {name: "feedback"; response: Strip}

export function init(): ScreenState {
  return {name: "exposure"}
}

export const hideStrips: Action = () => {
  return {name: "recall"}
}

export function submitResponse(response: Strip): Action {
  return () => ({name: "feedback", response})
}
