export function longestPalindrome3(s: string): number {
    const frequency: Set<string> = new Set()

    let longestPalindrome = 0

    for (const char of s) {
        if (frequency.has(char)) {
            longestPalindrome += 2
            frequency.delete(char)
        } else {
            frequency.add(char)
        }
    }

    return frequency.size > 0 ? longestPalindrome + 1 : longestPalindrome
}