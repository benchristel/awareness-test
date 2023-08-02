import { by } from "./sorting"

export function pick<T>(a: T[]): T {
  return a[Math.floor(Math.random() * a.length)]
}

export function shuffled<T>(a: T[]): T[] {
  return a.map((elem) => [elem, Math.random()] as const)
    .sort(by(([_, rank]) => rank))
    .map(([elem]) => elem)
}