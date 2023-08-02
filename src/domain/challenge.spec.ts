import {generateChallenge} from "./challenge"

test("generateChallenge", {
  "includes all 35 strips"() {
    const setOfStrips = new Set(generateChallenge().grid)
    expect(setOfStrips.size, is, 35)
  },

  "randomizes the order of the strips"() {
    const grid1 = generateChallenge().grid
    const grid2 = generateChallenge().grid
    expect(grid1, not(equals), grid2)
  },
})
