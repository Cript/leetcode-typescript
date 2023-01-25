import {searchInsert, searchInsert2} from "./01";
import {expect} from "chai";

describe('Search Insert Position', () => {
    const cases: {
        nums: number[],
        target: number,
        result: number
    }[] = [
        // { nums: [1, 3, 5, 6], target: 5, result: 2 },
        // { nums: [1, 3, 5, 6], target: 2, result: 1 },
        { nums: [1, 3, 5, 6], target: 10, result: 4 },
    ]

    cases.forEach(({nums, target, result}) => {
        describe(`When called with ${nums} and ${target}`, () => {
            it(`should return ${result}`, () => {
                // expect(searchInsert(nums, target)).equals(result)
                expect(searchInsert2(nums, target)).equals(result)
            })
        })
    })
})
