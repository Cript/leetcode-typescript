function getNext(n: number): number {
    let sum = 0

    while (n > 0) {
        const d = Math.floor(n % 10)
        n = n / 10
        sum += d * d
    }

    return sum
}

export function isHappy(n: number): boolean {
    let slow = n
    let fast = getNext(n)

    while (fast !== 1 && fast !== slow) {
        slow = getNext(slow)
        fast = getNext(getNext(fast))
    }

    return fast === 1
}