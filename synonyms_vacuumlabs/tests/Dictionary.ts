import {expect} from "chai";
import Dictionary, {WordsType} from "../Dictionary";

describe("Dictionary", () => {
    const rawDictionaries = [
        {
            rawDictionary: [
                ["big", "large"],
                ["large", "huge"],
                ["small", "little"],
                ["apple", "banana"]
            ],
            cases: [
                {queries: ["same", "same"], result: true},
                {queries: ["big", "large"], result: true},
                {queries: ["large", "big"], result: true},
                {queries: ["big", "huge"], result: true},
                {queries: ["huge", "big"], result: true},
                {queries: ["apple", "peach"], result: false},
                {queries: ["big", "tall"], result: false},
                {queries: ["peach", "PEACH"], result: true},
            ]
        },
        {
            rawDictionary: [
                ["magic", "WaTCH"],
                ["uNdeRDog", "EartH"],
                ["EArTh", "caKE"],
                ["UnIforM", "baLance"],
                ["BALancE", "ABILity"],
                ["UnifORM", "uNIfORM"],
                ["maNagER", "WaTcH"],
                ["MaNagER", "MaNAGeR"],
                ["FaKe", "EaRth"],
                ["BAlance", "CAKe"],
                ["AbIliTY", "uNiFOrm"],
                ["UNdErdoG", "magiC"]
            ],
            cases: [
                {queries: ["Magic", "Magic"], result: true},
                {queries: ["Cake", "eArth"], result: true},
                {queries: ["aBIlITy", "abiLiTY"], result: true},
                {queries: ["watCh", "UniFoRM"], result: true},
                {queries: ["CAke", "FaKe"], result: true},
                {queries: ["FAkE", "watCh"], result: true},
                {queries: ["MagIC", "abIlitY"], result: true},
                {queries: ["uNIfoRm", "AbIlITY"], result: true},
                {queries: ["baLAnCe", "eaRtH"], result: true},
                {queries: ["bAlANCE", "MANAGER"], result: true},
            ]
        }
    ]
    rawDictionaries.forEach(({rawDictionary, cases}, index) => {
        describe(`dictionary ${index + 1}`, () => {
            const dictionary = new Dictionary(rawDictionary as WordsType[])

            cases.forEach(({queries, result}) => {
                describe(`When called with ${queries}`, function () {
                    it(`should return ${result}`, function () {
                        const answer = dictionary.isSynonyms(queries as WordsType)
                        expect(answer).equals(result)
                    })
                })
            })
        })
    })
})
