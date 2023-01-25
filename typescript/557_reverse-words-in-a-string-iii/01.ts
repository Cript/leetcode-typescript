export function reverseWords(s: string): string {
    return s.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}

export function reverseWords2(s: string): string {
    let start = 0
    let end = 1
    let result = ''

    while (end < s.length) {
        if (s[end] == ' ') {
            result += reverseRange(s, start, end - 1)
            result += ' '
            start = end + 1
            end = end + 2
        } else {
            end++
        }
    }

    result += reverseRange(s, start, end - 1)

    return result
}

function reverseRange(s: string, start: number, end: number): string {
    let result = ''
    for (let i = end; i >= start; i--) {
        result += s[i]
    }
    return result
}