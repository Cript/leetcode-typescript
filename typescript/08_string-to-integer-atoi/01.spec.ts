import {expect} from "chai";
import {myAtoi} from "./01";
import {myAtoi2, INT_32_MAX, INT_32_MIN} from "./02";

describe('Reverse Integer', () => {
    const cases: {
        s: string,
        result: number
    }[] = [
        { s: '42', result: 42 },
        { s: '-42', result: -42 },
        { s: ' 32', result: 32 },
        { s: ' -+12', result: 0 },
        { s: '9999999999999', result: INT_32_MAX },
        { s: '-999999999999', result: INT_32_MIN },
    ]

    // describe(`myAtoi`, function() {
    //     cases.forEach(({s, result}) => {
    //         describe(`When called with ${s}`, function() {
    //             it(`should return ${result}`, function() {
    //                 expect(myAtoi(s)).equals(result)
    //             })
    //         })
    //     })
    // })

    describe(`myAtoi2`, function() {
        cases.forEach(({s, result}) => {
            describe(`When called with ${s}`, function() {
                it(`should return ${result}`, function() {
                    expect(myAtoi2(s)).equals(result)
                })
            })
        })
    })
})
