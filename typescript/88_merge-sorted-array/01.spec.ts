import {expect} from "chai";
import {merge} from "./01";

describe('Merge Sorted Array', () => {
    const cases: {
        nums1: number[]
        m: number
        nums2: number[]
        n: number
        result: number[]
    }[] = [
        {nums1: [], m: 0, nums2: [], n: 0, result: []},
        {nums1: [1], m: 1, nums2: [], n: 0, result: [1]},
        {nums1: [0], m: 0, nums2: [1], n: 0, result: [1]},
        {nums1: [1, 0], m: 1, nums2: [2], n: 1, result: [1, 2]},
        {nums1: [4, 0, 0, 0, 0, 0], m: 1, nums2: [1, 2, 3, 5, 6], n: 5, result: [1, 2, 3, 4, 5, 6]},
        {nums1: [1, 2, 3, 0, 0, 0], m: 3, nums2: [2, 5, 6], n: 3, result: [1, 2, 2, 3, 5, 6]},
    ]

    cases.forEach(({nums1, m, nums2, result}) => {
        describe(`When called with ${nums1} and ${nums2}`, () => {
            it(`should return ${result}`, () => {
                merge(nums1, m, nums2, nums2.length)

                expect(nums1).eqls(result)
            })
        })
    })
})
