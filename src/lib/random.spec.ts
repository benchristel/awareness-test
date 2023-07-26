import {pick} from "./random"

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
