// let val: any = 22;
// val = "string value";
// val = new Array();
// val.push(33);

// console.log(val);

let val: unknown = 0;
val = "string value";
val = new Array();

if (val instanceof Array) {
    val.push(33);
}
else{
    console.log("False");
}

console.log(val);

let variable: string = "Yuri";
let vars:{name: string} | {bike:string} = {
    name: "Yuri",
    bike: "Ragley"
};


console.log(vars);
