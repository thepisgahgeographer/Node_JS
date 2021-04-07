const items = [
    { name: "Hen Mtn", height: 2100 },
    { name: "Hibriten Mtn", height: 2250 }
];
const filter1 = items.filter((item, index) => {
    return item.name === "Hibriten Mtn";
});
console.log(filter1);
