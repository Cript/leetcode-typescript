import {twoSum, twoSum2, twoSum3, twoSum4, twoSum5} from "./01";
import {expect} from "chai";

describe('Two sum', () => {
    const cases: {
        nums: number[],
        target: number,
        result: number[]
    }[] = [
        { nums: [2,7,11,15], target: 9, result: [0,1]},
        { nums: [3,2,4], target: 6, result: [1,2]},
        { nums: [3,3], target: 6, result: [0,1]},
    ]

    cases.forEach(({nums, target, result}) => {
        describe(`When called with ${nums} and ${target}`, function() {
            it(`twoSum: should return ${result}`, function() {
                expect(twoSum(nums, target)).eqls(result)
            })
            it(`twoSum2,3: should return ${result}`, function() {
                expect(twoSum2(nums, target)).eqls(result)
                expect(twoSum3(nums, target)).eqls(result)
            })
            it(`twoSum4: should return ${result}`, function() {
                expect(twoSum4(nums, target)).eqls(result)
            })
            it(`twoSum5: should return ${result}`, function() {
                expect(twoSum5(nums, target)).eqls(result)
            })
        })
    })
})
