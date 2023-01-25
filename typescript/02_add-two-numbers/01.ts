import {ListNode} from "../common/linked-list";

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    return addTwoNumbersInternal(l1, l2, false)
}

function addTwoNumbersInternal(
    l1: ListNode | null,
    l2: ListNode | null,
    transfer: boolean
): ListNode | null {
    if (!l1 && !l2) {
        if (transfer) {
            return new ListNode(1)
        }

        return null
    }

    const l1Val = l1?.val ?? 0
    const l2Val = l2?.val ?? 0

    let sum = l1Val + l2Val
    if (transfer) {
        sum++
        transfer = false
    }

    if (sum > 9) {
        sum = sum - 10
        transfer = true
    }

    const node = new ListNode(sum)

    node.next = addTwoNumbersInternal(l1?.next ?? null, l2?.next ?? null, transfer)

    return node
}

