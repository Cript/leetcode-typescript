export function isPowerOfThreeLog(n: number): boolean {
    const a = Math.log(n) / Math.log(3)
    return Math.abs(a - Math.round(a)) < 1e-10
}