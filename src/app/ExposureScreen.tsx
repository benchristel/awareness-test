import {h} from "preact"
import {StripView} from "./StripView"
import {Strip, strips} from "../domain/strip"
import {Spacer} from "../infra/Spacer"
import "./ExposureScreen.css"
import { shuffled } from "../lib/random"
import { slicesOf } from "../lib/arrays"

export function ExposureScreen() {
  const rows = slicesOf(5, shuffled(strips))
  return (
    <div class="ExposureScreen">
      <Spacer px={36} />
      <div class="GrayBackground">
        {rows.map(row => <div class="Row">{row.map(strip => stripContainer(strip))}</div>)}
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
