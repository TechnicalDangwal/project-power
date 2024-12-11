function takeString(getString) {
    let obj = {}
    let mostCommonChar = '';
    getString = Array.from(getString)
    getString.forEach(element => {
        if (element in obj) {
            obj[element] = obj[element]+1
        }
        else {
            obj[element] = 1
        }
    });
    delete obj[" "]
    mostCommonChar = Object.keys(obj).find((value => {
        return obj[value] === Object.values(obj).sort().reverse()[0];

    }));

    return mostCommonChar

}

console.log(takeString("nittttin"));

output - t
