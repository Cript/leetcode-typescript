export function longestPalindrome(s: string): string {
    let largestPalindrome = ''

    for (let i = 0; i < s.length; i++) {
        const len1 = palindromeWithCenter(s, i, i)
        const len2 = palindromeWithCenter(s, i, i + 1)
        const len = Math.max(len1, len2)

        if (len > largestPalindrome.length) {
            const left = i - Math.floor((len - 1) / 2)
            const right = i + Math.floor(len / 2) + 1
            largestPalindrome = s.substring(left, right)
        }
    }

    return largestPalindrome
}

function palindromeWithCenter(s: string, left: number, right: number): number {
    while (left >= 0 && right < s.length) {
        if (s[left] === s[right]) {
            left--
            right++
        } else {
            break
        }
    }

    return right - left - 1
}