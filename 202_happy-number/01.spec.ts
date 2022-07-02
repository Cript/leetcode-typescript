import {expect} from "chai";
import {isHappy} from "./01";
import {isHappy as isHappyFloyd} from "./02";

describe('Happy Number', () => {
    const cases: {
        n: number,
        result: boolean
    }[] = [
        { n: 19, result: true },
        { n: 7, result: true },
        { n: 116, result: false },
        { n: 13, result: true },
    ]

    // describe(`Recursion`, () => {
    //     cases.forEach(({n, result}) => {
    //         describe(`When called with ${n}`, () => {
    //             it(`should return ${result}`, () => {
    //                 expect(isHappy(n)).equals(result)
    //             })
    //         })
    //     })
    // })

    describe(`Floyd's Cycle-Finding Algorithm`, () => {
        cases.forEach(({n, result}) => {
            describe(`When called with ${n}`, () => {
                it(`should return ${result}`, () => {
                    expect(isHappyFloyd(n)).equals(result)
                })
            })
        })
    })
})
