import {expect} from "chai";
import {reverseList, reverseList2} from "./01";
import {listToArray, newList} from "../common/linked-list";

describe('Reverse Linked List', () => {
    const cases: {
        list: number[],
        expected: number[],
    }[] = [
        {list: [], expected: []},
        {list: [1, 2, 3, 4, 5], expected: [5, 4, 3, 2, 1]},
        {list: [1, 2], expected: [2, 1]}
    ]

    describe(`Iterative`, () => {
        cases.forEach(({list, expected}) => {
            describe(`When called with ${list}`, () => {
                it(`should return ${list.reverse()}`, () => {
                    if (list.length === 0) {
                        expect(reverseList(null)).null
                        return
                    }

                    const result = reverseList(newList(list))
                    expect(listToArray(result)).eqls(expected)
                })
            })
        })
    })

    describe(`Recursive`, () => {
        cases.forEach(({list, expected}) => {
            describe(`When called with ${list}`, () => {
                it(`should return ${list.reverse()}`, () => {
                    if (list.length === 0) {
                        expect(reverseList2(null)).null
                        return
                    }

                    const result = reverseList2(newList(list))
                    expect(listToArray(result)).eqls(expected)
                })
            })
        })
    })
})
