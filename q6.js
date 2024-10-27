// Liner search

let array = [
    { username: "accacac" },
    { username: "acacc" },
    { username: "acaacaaafwf" },
];

let result = (array, target) => {
    for (let name of array) {
        if (name.username === target) {
            return true;
        }
    }
    return false;
};

console.log(result(array, "acacc"))