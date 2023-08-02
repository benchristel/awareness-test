import {pick, shuffled} from "./random"

test("pick", {
  "returns undefined given no options"() {
    expect(pick([]), is, undefined)
  },

  "returns a lone option"() {
    expect(pick([42]), is, 42)
  },

  "can choose either of two options"() {
    const picked = new Set()
    for (let i = 0; i < 30; i++) {
      picked.add(pick(["a", "b"]))
    }
    expect(picked.size, is, 2)
  },
})

test("shuffled", {
  "preserves the elements in the array"() {
    const result = shuffled([1, 2, 3])
    expect(new Set(result), equals, new Set([1, 2, 3]))
  },

  "changes the order of elements"() {
    const result = shuffled([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(result, not(equals), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  },

  "does not mutate the input"() {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    shuffled(input)
    expect(input, equals, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  }
})