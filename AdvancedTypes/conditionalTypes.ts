type IsFunction<T> = T extends (...args: any[]) => any ? "function" : "not function";

type A = IsFunction<() => void>; // "function"
type B = IsFunction<number>;     // "not function"

type IsString<Word> = Word extends string ? "its string" : "its not a string";

type WordA = IsString<string>; // "its string"
type WordB = IsString<number>; // "its not a string"

function checkString<Word>(value: Word): IsString<Word> {
    return (typeof value === "string" ? "its string" : "its not a string") as IsString<Word>;
}
  
const a = checkString("hello"); // "its string"
const b = checkString(123);     // "its not a string"



type IsType<Value, TypeChoosed> = Value extends TypeChoosed ? "Valid" : "Not Valid";

type ValueA = IsType<string, string>;   // "Valid"
type ValueB = IsType<number, string>;   // "Not Valid"
