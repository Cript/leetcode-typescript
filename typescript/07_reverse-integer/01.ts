export function reverse(x: number): number {
    const INT_32_MAX = 2147483648
    const INT_32_MIN = -2147483648
    
    let n = Math.abs(x)
    let rev = 0

    while (n > 0) {
        const dig = Math.floor(n % 10)

        if (rev > INT_32_MAX / 10 || (rev == INT_32_MAX / 10 && dig > 7)) return 0
        if (rev < INT_32_MIN / 10 || (rev == INT_32_MIN / 10 && dig < -8)) return 0

        rev = rev * 10 + dig
        n = Math.floor(n / 10)
    }

    if (x > 0) {
        return  rev
    } else {
        return 0 - rev
    }
}