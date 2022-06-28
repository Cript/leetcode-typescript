import {expect} from "chai";
import {reverseList, reverseList2} from "./01";
import {ListNode, newList, testListNode} from "../common/linked-list";

describe('Reverse Linked List', () => {
    const cases: {
        list: number[],
    }[] = [
        { list: [] },
        { list: [1,2,3,4,5] },
        { list: [1,2] }
    ]

    describe(`Iterative`, () => {
        cases.forEach(({list}) => {
            describe(`When called with ${list}`, () => {
                it(`should return ${list.reverse()}`, () => {
                    if (list.length === 0) {
                        expect(reverseList(null)).null
                        return
                    }

                    const listNumber = parseInt(list.join(''))
                    const result = reverseList(newList(listNumber))

                    expect(result).not.null

                    const reverseListNumber = parseInt(list.reverse().join(''))

                    testListNode(reverseListNumber, result as ListNode)
                })
            })
        })
    })

    describe(`Recursive`, () => {
        cases.forEach(({list}) => {
            describe(`When called with ${list}`, () => {
                it(`should return ${list.reverse()}`, () => {
                    if (list.length === 0) {
                        expect(reverseList2(null)).null
                        return
                    }

                    const listNumber = parseInt(list.join(''))
                    const result = reverseList2(newList(listNumber))

                    expect(result).not.null

                    const reverseListNumber = parseInt(list.reverse().join(''))

                    testListNode(reverseListNumber, result as ListNode)
                })
            })
        })
    })
})
