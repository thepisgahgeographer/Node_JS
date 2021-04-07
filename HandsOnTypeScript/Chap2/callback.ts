let completed = (size: number, callback) => {
    var reducer: number = 0;
    for (var i = 1; i < size; i++) {
        reducer = Math.sin(reducer * i);
    }
    callback();
}

completed(100000000, () => {
    console.log("It Completed")
});