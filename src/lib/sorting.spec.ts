import { by } from "./sorting"

test("by", {
  "returns a comparator that sorts by the given criterion, ascending"() {
    const first = <T>(a: Array<T>): T => a[0]
    const input: [string][] = [["b"], ["d"], ["a"], ["c"]]
    expect(input.sort(by<[string]>(first)), equals, [["a"], ["b"], ["c"], ["d"]])
  }
})