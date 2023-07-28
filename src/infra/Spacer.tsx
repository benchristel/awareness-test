import {h} from "preact"

export type Props = {
  px: number
}

export function Spacer({px}: Props) {
  return <div style={{height: px}} />
}
