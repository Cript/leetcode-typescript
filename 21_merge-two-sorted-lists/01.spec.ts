import {expect} from "chai";
import {mergeTwoLists} from "./01";
import {listToArray, newList} from "../common/linked-list";

describe('Merge Two Sorted Lists', () => {
    const cases: {
        list1: number[],
        list2: number[],
        expected: number[]
    }[] = [
        {list1: [1,2,4], list2: [1,3,4], expected: [1, 1, 2, 3, 4, 4]},
        {list1: [], list2: [], expected: []},
        {list1: [], list2: [0], expected: [0]},
    ]

    describe('mergeTwoLists', function() {
        cases.forEach(({list1, list2, expected}) => {
            describe(`When called with ${list1} and ${list2}`, function() {
                it(`should return ${expected}`, function () {
                    const result = mergeTwoLists(newList(list1), newList(list2))

                    expect(listToArray(result)).eqls(expected)
                })
            })
        })
    })
})
