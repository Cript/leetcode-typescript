import {expect} from "chai";
import {moveZeroes, moveZeroes2, moveZeroes3} from "./01";

describe('Move Zeroes', () => {
    const cases: {
        nums: number[],
        result: number[]
    }[] = [
        { nums: [0,1,0,3,12], result: [1,3,12,0,0] },
        { nums: [0], result: [0] },
        { nums: [2,1], result: [2,1] },
        { nums: [1,0,1], result: [1,1,0] },
    ]

    describe(`moveZeroes`, () => {
        cases.forEach(({nums, result}) => {
            const numsCopy = [...nums]
            describe(`When called with ${numsCopy}`, () => {
                it(`should return ${result}`, () => {
                    moveZeroes(numsCopy)
                    expect(numsCopy).eqls(result)
                })
            })
        })
    })

    describe(`moveZeroes2`, () => {
        cases.forEach(({nums, result}) => {
            const numsCopy = [...nums]
            describe(`When called with ${numsCopy}`, () => {
                it(`should return ${result}`, () => {
                    moveZeroes2(numsCopy)
                    expect(numsCopy).eqls(result)
                })
            })
        })
    })

    describe(`moveZeroes3`, () => {
        cases.forEach(({nums, result}) => {
            const numsCopy = [...nums]
            describe(`When called with ${numsCopy}`, () => {
                it(`should return ${result}`, () => {
                    moveZeroes3(numsCopy)
                    expect(numsCopy).eqls(result)
                })
            })
        })
    })
})
