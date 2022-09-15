import {solution} from "./01";
import {expect} from "chai";

describe('First Bad Version', () => {
    const cases: {
        n: number,
        bad: number
    }[] = [
        { n: 5, bad: 4 },
        { n: 1, bad: 1 },
        { n: 2, bad: 2 },
    ]

    cases.forEach(({n, bad}) => {
        describe(`When called with ${n}`, () => {
            it(`should return ${bad}`, () => {

                const isBadVersion = (version: number): any => {
                    return version >= bad
                }

                expect(solution(isBadVersion)(n)).equals(bad)
            })
        })
    })
})
