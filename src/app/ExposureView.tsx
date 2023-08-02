import {h} from "preact"
import {StripView} from "./StripView"
import {Strip} from "../domain/strip"
import {Spacer} from "../infra/Spacer"
import "./ExposureView.css"
import {slicesOf} from "../lib/arrays"
import {Challenge} from "../domain/challenge"

type Props = {
  challenge: Challenge
}

export function ExposureView(props: Props) {
  const rows = slicesOf(5, props.challenge.grid)
  return (
    <div class="ExposureView">
      <Spacer px={36} />
      <div class="GrayBackground">
        {rows.map((row) => (
          <div class="Row">{row.map(stripContainer)}</div>
        ))}
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
