import {ListNode} from "../common/linked-list";

export function detectCycle(head: ListNode | null): ListNode | null {
    if(!head || !head.next) {
        return null;
    }

    let slow: ListNode | null = head
    let fast: ListNode | null = head

    while (fast && fast.next) {
        slow = slow?.next ?? null
        fast = fast?.next?.next ?? null

        if (slow === fast) {
            slow = head
            while(slow !== fast) {
                slow = slow?.next ?? null;
                fast = fast?.next ?? null;
            }
            return slow;
        }
    }

    return null
}