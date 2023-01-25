import {ListNode} from "../common/linked-list";

export function middleNode2(head: ListNode | null): ListNode | null {
    let [slow, fast] = [head, head]

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow?.next ?? null
    }

    return slow
}