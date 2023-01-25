export function isPowerOfThreeString(n: number): boolean {
    return !!n.toString(3).match(/^10*$/)
}