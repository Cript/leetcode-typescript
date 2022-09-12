import {expect} from "chai";

export class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function newList(numbers: number[]): ListNode {
    let prevListNode = null

    for (let i = 0; i < numbers.length; i++) {
        prevListNode = new ListNode(numbers[i], prevListNode)
    }

    return prevListNode as ListNode
}

export function numberToArray(number: number): number[] {
    return number.toString().split('').map(Number)
}

export function testListNode(number: number, result: ListNode) {
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