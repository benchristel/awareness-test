import { slicesOf } from "./arrays"
import { thrownFrom } from "./testing"

test("slicesOf", {
  "given an empty array, returns empty"() {
    expect(slicesOf(3, []), equals, [])
  },

  "given an array of one element, returns one slice"() {
    expect(slicesOf(3, [1]), equals, [[1]])
  },

  "returns multiple slices with no duplicates"() {
    expect(slicesOf(3, [1, 2, 3, 4, 5, 6]), equals, [[1, 2, 3], [4, 5, 6]])
  },

  "throws given a slice size of 0"() {
    expect(thrownFrom(() => slicesOf(0, [1])), equals, Error("slicesOf was called with invalid slice length 0"))
  },

  "throws given a negative slice size"() {
    expect(thrownFrom(() => slicesOf(-1, [1])), equals, Error("slicesOf was called with invalid slice length -1"))
  },
})
