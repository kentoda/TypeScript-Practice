let a: number = 10;
let b: number = 5;

a = 20;

// ↓型の一覧
let s: string = "文字列が入る";
let n: boolean = true;
let q: any = "文字列、数値、真偽値、何でも入るよ";
let un: unknown = "どんな値が入るかわからないよ";
let kk: null = null;
let pp: undefined = undefined;

// UnionType
let number_or_string: number | string = "数値か文字列のどちらかが入りますよ";
console.log(number_or_string)

let ans: number = a * b;
console.log(ans);

