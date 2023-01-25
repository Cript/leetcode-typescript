export function reverseString(s: string[]): void {
    s.reverse()
}

export function reverseString2(s: string[]): void {
    let i = 0
    let j = s.length - 1

    while (i < j) {
        const jElement = s[j]
        s[j] = s[i]
        s[i] = jElement
        i++
        j--
    }
}