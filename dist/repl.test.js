import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";
describe.each([
    {
        input: "  hello  world  ",
        expected: ["hello", "world"],
    },
    {
        input: "Charmander Bulbasaur PIKACHU",
        expected: ["charmander", "bulbasaur", "pikachu"],
    },
    {
        input: "hello world",
        expected: ["hello", "world"],
    },
    {
        input: "   MULTIPLE    SPACES   BETWEEN   ",
        expected: ["multiple", "spaces", "between"],
    },
    {
        input: "single",
        expected: ["single"],
    },
    {
        input: "   ",
        expected: [""],
    },
    {
        input: "",
        expected: [""],
    },
    {
        input: "MiXeD CaSe WoRdS",
        expected: ["mixed", "case", "words"],
    },
    {
        input: "\t\ntabs\tand\nnewlines\t\n",
        expected: ["tabs", "and", "newlines"],
    },
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        const actual = cleanInput(input);
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            expect(actual[i]).toBe(expected[i]);
        }
    });
});
