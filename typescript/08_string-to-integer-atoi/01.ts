const INT_32_MIN = -2147483648
const INT_32_MAX = 2147483648 - 1

export function myAtoi(s: string): number {
    let i = 0
    let negative = false

    while (true) {
        if(s[i] === ' ') {
            i++
            continue
        }
        break
    }

    if (s[i] === '-' || s[i] === '+') {
        if (s[i] === '-') {
            negative = true
        }
        i++
    }

    const result: string[] = []

    while (i < s.length) {
        if (s[i] >= '0' && s[i] <= '9') {
            result.push(s[i])
            i++
            continue
        }

        break
    }

    if (result.length === 0) {
        return 0
    }

    let number = parseInt(result.join(''))
    number = negative ? - number : number

    if (number < INT_32_MIN) {
        return INT_32_MIN
    }

    if (number > INT_32_MAX) {
        return INT_32_MAX
    }

    return number
}