const items = [
    { name: "Hen Mtn", height: 2100 },
    { name: "Hibriten Mtn", height: 2250 }
];
const elements = items.map((item, index) => {
    return `${item.height} - ${item.name}`;
});
console.log(elements);
