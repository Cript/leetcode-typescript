export function isSubsequence(s: string, t: string): boolean {
    if (s.length === 0) {
        return true
    }

    let sI = 0

    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[sI]) {
            sI++
        }

        if (sI === s.length) {
            return true
        }
    }

    return false
}