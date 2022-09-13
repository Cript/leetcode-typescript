import {ListNode} from "../common/linked-list";

export function middleNode(head: ListNode | null): ListNode | null {
    let i: ListNode | null = head
    let j: ListNode | null = head?.next ?? null

    while (true) {
        if (null === j) {
            return i
        }

        i = i?.next ?? null
        j = j.next?.next ?? null
    }
}