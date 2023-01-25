export function lengthOfLongestSubstring(s: string): number {
    let left = 0;
    let right = 0;
    let length = 0;
    const chars = new Map();

    while (right < s.length) {
        const char = s[right]

        if (chars.has(char) && chars.get(char) >= left) {
            length = Math.max(length, right - left)
            left = chars.get(char) + 1
        }

        chars.set(char, right)

        right++
    }

    length = Math.max(length, right - left)

    return length
}