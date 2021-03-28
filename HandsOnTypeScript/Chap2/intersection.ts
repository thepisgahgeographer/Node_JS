// let obj: { name: string } & { age: number } = {
//     name: "tom",
//     age: 25
// }

// console.log(obj);

// type Points = "Ragley" | "Piglet" | "BigAL";
// let bike: Points = "Ragley";

// console.log(bike);

// type Run = (miles: number) => boolean;
// let runner: Run = function (miles: number): boolean {
//     if (miles > 10) {
//         return true;
//     }
//     return false;
// }
// console.log(runner(9));

// type Run = (miles: number) => boolean;
// let runner: Run = function (miles: number): boolean {
//     if (miles > 10) {
//         return true;
//     }
//     return false;
// }
// console.log(runner(9));

// class Person {
//     constructor() { }
//     msg: string;
//     speak() {
//         console.log(this.msg);
//     }
// }

// const Yuri = new Person();
// Yuri.msg = "Hello";
// Yuri.speak();


// class Person {
//     constructor(private msg: string) { }
//     speak() {
//         console.log(this.msg);
//     }
// }
// const tom = new Person("hello");
// // tom.msg = "hello";
// tom.speak();


// function test(text:string) {
//     console.log("Hello" + text + "You Rock");
// }

// // test("Yuri");

// // type Points = (text:string) => void;

// // let runner: Points = ("Hello World");

// // console.log(runner);

// type Run = (miles: number) => void;
// let runner: Run = function (miles: number): boolean {
//     if (miles > 10) {
//         return true;
//     }
//     return false;
// }
// console.log(runner(9));

type Points = 10 | 20 | 30 | 40;

let testing:Points = 20;
console.log(testing);