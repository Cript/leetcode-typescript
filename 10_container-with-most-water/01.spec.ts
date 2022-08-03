import {expect} from "chai";
import {maxArea} from "./01";

describe('max_area', () => {
    const cases: {
        height: number[],
        result: number
    }[] = [
        {height: [1, 8, 6, 2, 5, 4, 8, 3, 7], result: 49},
        {height: [2, 3, 10, 5, 7, 8, 9], result: 36},
        {height: [1, 1], result: 1}
    ]

    cases.forEach(({height, result}) => {
        describe(`When called with ${height}`, () => {
            it(`should return ${result}`, () => {
                expect(maxArea(height)).equals(result)
            })
        })
    })
})
