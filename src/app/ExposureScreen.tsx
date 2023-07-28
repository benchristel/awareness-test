import {h} from "preact"
import {StripView} from "./StripView"
import {Strip} from "../domain/strip"
import "./ExposureScreen.css"

export function ExposureScreen() {
  return (
    <div class="ExposureScreen">
      <div class="GrayBackground">
        <div class="Row">
          {stripContainer(1)}
          {stripContainer(2)}
          {stripContainer(3)}
          {stripContainer(4)}
          {stripContainer(5)}
        </div>
        <div class="Row">
          {stripContainer(1)}
          {stripContainer(2)}
          {stripContainer(3)}
          {stripContainer(4)}
          {stripContainer(5)}
        </div>
        <div class="Row">
          {stripContainer(1)}
          {stripContainer(2)}
          {stripContainer(3)}
          {stripContainer(4)}
          {stripContainer(5)}
        </div>
        <div class="Row">
          {stripContainer(1)}
          {stripContainer(2)}
          {stripContainer(3)}
          {stripContainer(4)}
          {stripContainer(5)}
        </div>
        <div class="Row">
          {stripContainer(1)}
          {stripContainer(2)}
          {stripContainer(3)}
          {stripContainer(4)}
          {stripContainer(5)}
        </div>
        <div class="Row">
          {stripContainer(1)}
          {stripContainer(2)}
          {stripContainer(3)}
          {stripContainer(4)}
          {stripContainer(5)}
        </div>
        <div class="Row">
          {stripContainer(1)}
          {stripContainer(2)}
          {stripContainer(3)}
          {stripContainer(4)}
          {stripContainer(5)}
        </div>
      </div>
    </div>
  )
}

function stripContainer(strip: Strip) {
  return (
    <div class="StripContainer">
      <StripView strip={strip} />
    </div>
  )
}
