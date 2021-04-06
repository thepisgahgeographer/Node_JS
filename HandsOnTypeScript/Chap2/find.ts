const items = [
    {name: "Jon", age:28},
    {name:"linda",age:30}
];

// const finding = items.find((item)=>{
//     return item.name === "Jon"
// });

const finding1 = items.find((item)=>{
    return item.name==="linda"
});

console.log(finding1);