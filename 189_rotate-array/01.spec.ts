import {expect} from "chai";
import {rotate, rotate2} from "./01";

describe('Rotate Array', () => {
    const cases: {
        nums: number[],
        k: number,
        result: number[]
    }[] = [
        { nums: [1,2,3,4,5,6,7], k: 3, result: [5,6,7,1,2,3,4] },
        { nums: [1,2], k: 3, result: [2,1] },
        { nums: [1,2], k: 5, result: [2,1] },
    ]

    describe(`Rotate`, () => {
        cases.forEach(({nums, k, result}) => {
            describe(`When called with ${nums} and ${k}`, () => {
                it(`should return ${result}`, () => {
                    const numsCopy = [...nums]
                    rotate(numsCopy, k)
                    expect(numsCopy).eqls(result)
                })
            })
        })
    })

    describe(`Rotate2`, () => {
        cases.forEach(({nums, k, result}) => {
            describe(`When called rotate2 with ${nums} and ${k}`, () => {
                it(`should return ${result}`, () => {
                    const numsCopy = [...nums]
                    rotate2(numsCopy, k)
                    expect(numsCopy).eqls(result)
                })
            })
        })
    })
})
