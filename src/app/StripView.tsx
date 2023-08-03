import {h} from "preact"
import {Square, Strip, patterns} from "../domain/strip"
import "./StripView.css"

export type Props = {
  strip: Strip
  ghost: boolean
}

export function StripView(props: Props) {
  const pattern = patterns[props.strip]

  if (props.ghost) {
    return <div class="GhostStrip" />
  }

  return (
    <svg class="Strip" viewBox="0 0 7 1" preserveAspectRatio="none">
      {pattern.map(svgForSquare)}
    </svg>
  )
}

function svgForSquare(color: Square, left: number) {
  return (
    <rect
      width="1"
      height="1"
      x={left + 0.5}
      y={0.5}
      style={{stroke: color, fill: color}}
    />
  )
}
