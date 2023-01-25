export const INT_32_MIN = -2147483648
export const INT_32_MAX = 2147483647
export const INT_32_MAX_DIVIDED= Math.floor(INT_32_MAX / 10)

export function myAtoi2(s: string): number {
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

    let number = 0

    while (i < s.length) {
        const digit = s[i]

        if (digit >= '0' && digit <= '9') {
            if (number > INT_32_MAX_DIVIDED) {
                number = negative ? INT_32_MIN : INT_32_MAX
                return number
            }

            if (number === INT_32_MAX_DIVIDED) {
                if (digit > '7') {
                    number = negative ? INT_32_MIN : INT_32_MAX
                    return number
                }
            }

            number = number * 10 + parseInt(s[i])

            i++
            continue
        }

        break
    }

    return numberTransformed(number, negative)
}

function numberTransformed(number: number, negative: boolean) {
    return negative ? -number : number
}