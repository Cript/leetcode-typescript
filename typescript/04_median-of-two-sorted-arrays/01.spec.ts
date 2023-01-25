import {expect} from "chai";
import {findMedianSortedArrays} from "./01";

describe('Median of Two Sorted Arrays', () => {
    const cases: {
        array1: number[],
        array2: number[],
        result: number
    }[] = [
        {array1: [1,3], array2: [2], result: 2},
        {array1: [1,2], array2: [3,4], result: 2.5},
    ]

    cases.forEach(({array1, array2, result}) => {
        describe(`When called with ${array1} and ${array2}`, () => {
            it(`should return ${result}`, function() {
                expect(findMedianSortedArrays(array1, array2)).equals(result)
            })
        })
    })
})
