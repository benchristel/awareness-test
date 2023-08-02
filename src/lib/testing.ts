export function thrownFrom(fn: () => unknown): Error | string | undefined {
  let e: Error | string | undefined
  try {
    fn()
  } catch (_e: any) {
    e = _e
  }
  return e
}