import * as fs from 'fs';
import Dictionary from "./Dictionary";

const json = JSON.parse(fs.readFileSync('example_big.in.json', 'utf8'));
const testCases = json.testCases

const result = []

for (const testCase of testCases) {
    const dictionary = new Dictionary(testCase.dictionary)

    for (const query of testCase.queries) {
        if (dictionary.isSynonyms(query)) {
            result.push('synonyms')
        } else {
            result.push('different')
        }
    }
}

fs.writeFileSync('big.out.txt', result.join('\n'))