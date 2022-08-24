export function isPowerOfFour(n: number): boolean {
    return ((n & (n - 1)) === 0) && (n > 0) && (n.toString(2).length % 2 === 1)
}