export function unreachable(
  situation: string,
  impossibleValue: never,
  format: (value: any) => string,
): Error {
  return new Error(
    `Unhandled ${situation}: ${format(impossibleValue)}`,
  )
}
