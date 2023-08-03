import {h} from "preact"
import "./GhostStripView.css"

type Props = {
  onClick: () => unknown
}

export function GhostStripView(props: Props) {
  return (
    <button class="GhostStrip" onClick={props.onClick} tabIndex={0} />
  )
}
