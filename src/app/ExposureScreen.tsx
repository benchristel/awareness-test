import {h} from "preact"
import "./ExposureScreen.css"
import {StripView} from "./StripView"
import {Strip} from "../domain/strip"

export function ExposureScreen() {
  return (
    <div class="ExposureScreen">
      <div class="Grid">
        <div class="Row">
          <div class="Sector">
            {stripContainer(1)}
            {stripContainer(2)}
            {stripContainer(3)}
            {stripContainer(4)}
          </div>
          <div class="Sector">
            {stripContainer(5)}
            {stripContainer(6)}
            {stripContainer(7)}
            {stripContainer(8)}
          </div>
          <div class="Sector">
            {stripContainer(9)}
            {stripContainer(10)}
            {stripContainer(11)}
            {stripContainer(12)}
          </div>
        </div>
        <div class="Row">
          <div class="Sector">
            {stripContainer(13)}
            {stripContainer(14)}
            {stripContainer(15)}
            {stripContainer(16)}
          </div>
          <div class="Sector">
            {stripContainer(17)}
            {stripContainer(18)}
            {stripContainer(19)}
          </div>
          <div class="Sector">
            {stripContainer(20)}
            {stripContainer(21)}
            {stripContainer(22)}
            {stripContainer(35)}
          </div>
        </div>
        <div class="Row">
          <div class="Sector">
            {stripContainer(23)}
            {stripContainer(24)}
            {stripContainer(25)}
            {stripContainer(26)}
          </div>
          <div class="Sector">
            {stripContainer(27)}
            {stripContainer(28)}
            {stripContainer(29)}
            {stripContainer(30)}
          </div>
          <div class="Sector">
            {stripContainer(31)}
            {stripContainer(32)}
            {stripContainer(33)}
            {stripContainer(34)}
          </div>
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
