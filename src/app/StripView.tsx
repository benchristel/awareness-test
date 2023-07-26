import {h} from "preact"
import {Square, Strip, patterns} from "../domain/strip"

export type Props = {
  strip: Strip
}

export function StripView(props: Props) {
  const pattern = patterns[props.strip]
  return <svg viewBox="0 0 7 1">{pattern.map(svgForSquare)}</svg>
}

function svgForSquare(color: Square, left: number) {
  return (
    <rect
      width="1"
      height="1"
      x={left}
      style={{stroke: color, fill: color}}
    />
  )
}
