console.log("Hello from ts.");

let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

let strArr: Array<string>;
// let strArr: string[];
let numArr: Array<number>;
// let numArr: number[];
let booArr: Array<boolean>;
//let booArr: boolean[];

let strNumTuple: [string, number];

let myNull: null = null;
let myVoid: void = undefined;
let myUndefined: undefined = undefined;

strNumTuple = ["Hello", 4];

myString = "hell world".slice(0, 3);
myNum = 0xd1;
myBool = true;
myVar = 5 + "4";

strArr = ["hello", "world", "2"];
numArr = [1, 2, 3];
booArr = [true, false, true];

console.log(myString);
console.log(myNum);
console.log(myBool);
console.log(myVar);

console.log(strArr);
console.log(numArr);
console.log(booArr);

console.log(strNumTuple);

console.log(myNull);
console.log(myVoid);
console.log(myUndefined);
