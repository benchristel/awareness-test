import {unreachable} from "./unreachable"

test("unreachable", {
  "returns an error"() {
    const error = unreachable(
      "weirdness",
      "bad value" as never,
      (x: any) => x,
    )
    expect(error, equals, Error("Unhandled weirdness: bad value"))
  },

  "formats the value using the given formatter"() {
    const error = unreachable(
      "weirdness",
      {foo: "bar"} as never,
      JSON.stringify,
    )
    expect(error, equals, Error(`Unhandled weirdness: {"foo":"bar"}`))
  },
})
