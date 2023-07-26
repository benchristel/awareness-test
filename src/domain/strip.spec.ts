import {Strip, patterns} from "./strip"

for (let i = 1; i <= 35; i++) {
  test("strip pattern " + i, {
    "has four white squares and three white squares"() {
      const numBlackSquares = patterns[i as Strip].filter(
        (square) => square === "black",
      ).length
      const numWhiteSquares = patterns[i as Strip].filter(
        (square) => square === "white",
      ).length
      expect(numBlackSquares, is, 3)
      expect(numWhiteSquares, is, 4)
    },
  })
}

test("the set of 35 strips", {
  "has no duplicates"() {
    const patternSet = new Set<string>()
    Object.values(patterns)
      .map((pattern) => pattern.join(","))
      .forEach((s) => patternSet.add(s))
    expect(patternSet.size, is, 35)
  },
})
