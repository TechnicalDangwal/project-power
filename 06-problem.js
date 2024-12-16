let a = []
function range(from , to) {

    if (from == to-1) {
        return from
    }
    a.push(from+1)
 return range(from+1,to) ? a : "error"
}

console.log(range(1,100));
