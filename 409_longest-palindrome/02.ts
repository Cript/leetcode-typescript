export function longestPalindrome2(s: string): number {
    const frequency: {
        [index: string]: number
    } = {}

    for (const letter of s) {
        if (!frequency[letter]) {
            frequency[letter] = 0
        }

        frequency[letter]++
    }

    let longestPalindrome = 0
    let hasMiddle = false

    for (const number of Object.values(frequency)) {
        if (number % 2 === 0) {
            longestPalindrome += number
            continue
        }

        if (number % 2 === 1) {
            longestPalindrome += number - 1
            hasMiddle = true
        }
    }

    return hasMiddle ? longestPalindrome + 1 : longestPalindrome
}