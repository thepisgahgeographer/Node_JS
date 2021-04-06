// function MyFunction (){
//     console.log(this);
// }
// MyFunction();
// let test = new MyFunction();
// const Func = (message: string):void=>{
//     console.log(message);
// }
// Func("hello");
// let test:string = "Hello";
// console.log(test.length);
var func = function () {
    return {
        brand: "Ragley",
        travel: 160,
        color: "Gunmetal"
    };
};
var _a = func(), manu = _a.brand, travel = _a.travel;
console.log(manu, travel);
