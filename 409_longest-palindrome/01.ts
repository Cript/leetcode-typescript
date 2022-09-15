export function longestPalindrome(s: string): number {
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
    let midFilled = false

    for (const number of Object.values(frequency)) {
        if (number === 1) {
            if (!midFilled) {
                longestPalindrome += 1
                midFilled = true
            }
            continue
        }

        if (number % 2 === 0) {
            longestPalindrome += number
            continue
        }

        if (!midFilled) {
            longestPalindrome += number
            midFilled = true
            continue
        }

        longestPalindrome += number - 1
    }

    return longestPalindrome
}