import {useRef} from "preact/hooks"

export function useLatestRef<T>(value: T): {current: T} {
  const ref = useRef(value)
  ref.current = value
  return ref
}
