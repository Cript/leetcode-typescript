export class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function listToArray(listNode: ListNode | null): number[] {
    const numbers: number[] = []

    while (true) {
        if (listNode === null) {
            return numbers
        }

        numbers.push(listNode.val)
        listNode = listNode.next
    }
}

export function newList(numbers: number[]): ListNode | null {
    if (numbers.length === 0) {
        return null
    }

    let nextListNode = null

    for (let i = numbers.length - 1; i >=0 ; i--) {
        nextListNode = new ListNode(numbers[i], nextListNode)
    }

    return nextListNode as ListNode
}