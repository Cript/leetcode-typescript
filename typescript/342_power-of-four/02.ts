export function isPowerOfFour2(n: number): boolean {
    return ((n & (n - 1)) === 0) && (n > 0) && ((n & 1431655765) === n)
}