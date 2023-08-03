import {h} from "preact"
import "./GhostStrip.css"

type Props = {
  onClick: () => unknown
}

export function GhostStripView(props: Props) {
  return (
    <button class="GhostStrip" onClick={props.onClick} tabIndex={0} />
  )
}
