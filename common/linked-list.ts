import {expect} from "chai";

export class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function newList(number: number): ListNode {
    const digits = number.toString().split('').map(Number);

    let prevListNode = null

    for (let i = 0; i < digits.length; i++) {
        prevListNode = new ListNode(digits[i], prevListNode)
    }

    return prevListNode as ListNode
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