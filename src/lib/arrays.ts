export function slicesOf<T>(n: number, array: T[]): T[][] {
  if (n <= 0) {
    throw new Error("slicesOf was called with invalid slice length " + n)
  }
  const slices = []
  for (let start = 0; start < array.length; start += n) {
    slices.push(array.slice(start, start + n))
  }
  return slices
}