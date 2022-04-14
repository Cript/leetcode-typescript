import {addTwoNumbers, ListNode} from "./01";
import {expect} from "chai";

describe('add_two_numbers', () => {
    const cases: {
        l1: number,
        l2: number,
        result: number
    }[] = [
        { l1: 0, l2: 0, result: 0},
        { l1: 3, l2: 4, result: 7},
        { l1: 34, l2: 33, result: 67},
        { l1: 342, l2: 465, result: 807},
        { l1: 999, l2: 2, result: 1001},
        { l1: 9999999, l2: 9999, result: 10009998},
    ]

    cases.forEach(({l1, l2, result}) => {
        describe(`When called with ${l1} and ${l2}`, function() {
            it(`addTwoNumbers: should return ${result}`, function() {
                expect(addTwoNumbers(newList(l1), newList(l2))).eqls(newList(result))
            })
        })
    })

    describe('new_list', () => {
        const cases: {
            number: number,
            result?: (result: ListNode) => void
        }[] = [
            { number: 0 },
            { number: 342 },
            { number: 465 },
            { number: 999 },
            { number: 1000 },
        ]

        cases.forEach(({number, result}) => {
            describe(`When called with ${number}`, function() {
                it(`newList: should return correct ListNode`, function() {
                    testListNode(number, newList(number))
                })
            })
        })
    })
})

export function newList(number: number): ListNode {
    const digits = number.toString().split('').map(Number);

    let prevListNode = null

    for (let i = 0; i < digits.length; i++) {
        prevListNode = new ListNode(digits[i], prevListNode)
    }

    return prevListNode as ListNode
}

function testListNode(number: number, result: ListNode) {
    const digits = number.toString().split('').map(Number);

    expect(result.val).equals(digits[digits.length - 1])
    if(digits.length > 1) {
        expect(result).is.not.null
        expect(result.next).instanceof(ListNode)

        testListNode(+digits.slice(0, digits.length - 1).join(''), result.next as ListNode)
    } else {
        expect(result.next).is.null
    }
}
