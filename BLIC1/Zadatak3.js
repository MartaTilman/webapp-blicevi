var arr = [321, 62, "Marmelada", 4, "Kruh", 1, 1234, "Tanjur", 50]
function sortArr(arr) {
    let numArr = arr.filter((el) => typeof el === "number").sort((a, b) => a - b);
    let strArr = arr.filter((el) => typeof el === "string").sort();
    return numArr.concat(strArr);
}
console.log(`Nesortirani: ${arr} Sortirani: ${sortArr(arr)}`);
