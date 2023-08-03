import {h} from "preact"
import {StripView} from "./StripView"
import {Spacer} from "../infra/Spacer"
import "./GridView.css"
import {slicesOf} from "../lib/arrays"
import {Challenge} from "../domain/challenge"

type Props = {
  challenge: Challenge
  ghostStrips: boolean
}

export function GridView(props: Props) {
  const rows = slicesOf(5, props.challenge.grid)
  return (
    <div class="GridView">
      <Spacer px={36} />
      <div class="GrayBackground">
        {rows.map((row) => (
          <div class="Row">
            {row.map((strip) => (
              <div class="StripContainer">
                <StripView strip={strip} ghost={props.ghostStrips} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
