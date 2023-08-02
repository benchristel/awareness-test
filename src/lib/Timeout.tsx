import {useEffect} from "preact/hooks"
import {useLatestRef} from "./useLatestRef"

type Props = {
  ms: number
  onExpired: () => unknown
}

export function Timeout(props: Props) {
  const {ms, onExpired} = props
  const onExpiredRef = useLatestRef(onExpired)
  useEffect(() => {
    const timeout = setTimeout(() => onExpiredRef.current(), ms)
    return () => clearTimeout(timeout)
  }, [ms])
  return null
}
