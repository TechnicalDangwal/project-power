function fibonacci(value) {
    let result = [0, 1]
    for (let index = 0; index < value - 1; index++) {
        result.push(result[index] + result[index + 1])


    }

    return result


}

console.log(fibonacci(5));


