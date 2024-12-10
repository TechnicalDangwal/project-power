function takeString(getString) {
    let obj = {}
    let count = 1;
    let mostCommonChar = '';
    getString = Array.from(getString)
    getString.forEach(element => {
        if (!(element in obj)) {
            obj[element] = count
            count = 1
        }
        else {
            obj[element] = ++count
        }
    });

    mostCommonChar = Object.keys(obj).find((value => {
        return obj[value] === Object.values(obj).sort().reverse()[0];

    }));

    return mostCommonChar

}

console.log(takeString("nitin"));