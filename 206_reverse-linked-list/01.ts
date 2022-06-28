import {ListNode} from "../common/linked-list";

export function reverseList(head: ListNode | null): ListNode | null {
    if (head === null) return null

    let first = head

    while (true) {
        const next = head.next

        if (next === null) {
            return first
        }

        head.next = next.next
        next.next = first
        first = next
    }
}

export function reverseList2(head: ListNode | null): ListNode | null {
    if (head === null) return null

    return reverseListRecursive(head, null)
}

function reverseListRecursive(head: ListNode | null, newHead: ListNode | null): ListNode {
    if (head === null) return newHead as ListNode

    const next = head.next

    head.next = newHead

    return reverseListRecursive(next, head)
}