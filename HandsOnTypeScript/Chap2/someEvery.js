const items = [
    { name: "Hen Mtn", height: 2200 },
    { name: "Hibriten Mtn", height: 2250 },
    { name: "Timbered Ridge", height: 1680 }
];
console.log(items.some(item => {
    return item.height === 2250;
}));
console.log(items.every(item => {
    return item.height != 1680;
}));
