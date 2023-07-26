export function pick<T>(a: T[]): T {
  return a[Math.floor(Math.random() * a.length)]
}
