import {search} from "./01";
import {expect} from "chai";

describe('binary_search', () => {
    const cases: {
        array: number[],
        target: number,
        result: number
    }[] = [
        { array: [-1, 0, 3, 5, 9, 12], target: 9, result: 4 },
        { array: [-1, 0, 3, 5, 9, 12], target: 2, result: -1 },
    ]

    cases.forEach(({array, target, result}) => {
        describe(`When called with ${array} and ${target}`, () => {
            it(`should return ${result}`, () => {
                expect(search(array, target)).equals(result)
            })
        })
    })
})
