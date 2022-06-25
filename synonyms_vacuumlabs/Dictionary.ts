export default class Dictionary {
    private dictionary: DictionaryType = {}

    constructor(synonyms: WordsType[]) {
        for (const synonymsPair of synonyms) {
            this.buildDictionary(synonymsPair)
        }
    }

    buildDictionary(words: WordsType) {
        const word = words[0].toLowerCase()
        const word2 = words[1].toLowerCase()

        if(word === word2) {
            return
        }

        if (!(word in this.dictionary)) {
            this.dictionary[word] = []
        }

        if (!this.dictionary[word].includes(word2)) {
            this.dictionary[word].push(word2)
        }

        if (!(word2 in this.dictionary)) {
            this.dictionary[word2] = []
        }

        if (!this.dictionary[word2].includes(word)) {
            this.dictionary[word2].push(word)
        }
    }

    isSynonyms(synonyms: WordsType): boolean {
        const word = synonyms[0].toLowerCase()
        const word2 = synonyms[1].toLowerCase()

        if (word === word2) {
            return true
        }

        return this.isSynonym(word, word2)
    }

    private isSynonym(source: string, word: string): boolean {
        const stack = [source]
        const synonyms = []

        while (stack.length > 0) {
            const node = stack.pop() as string
            synonyms.push(node)

            if (!(node in this.dictionary)) {
                continue
            }

            for (const child of this.dictionary[node]) {
                if (synonyms.includes(child)) {
                    continue
                }

                stack.push(child)
            }
        }

        return synonyms.includes(word)
    }
}

type DictionaryType = {
    [word: string]: string[]
}
export type WordsType = [string, string]