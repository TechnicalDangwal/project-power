function func(array){
	let longestString;
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		if (index != array.length-1) {
			if (index == 0) {
				longestString = array[index].length > array[index+1].length ? array[index] : array[index+1]
			}
			else{
				longestString = longestString.length > array[index+1].length ? longestString : array[index+1]
			}
		
			
		}
		
		
	}
	return longestString
}

console.log(func(["hello"  , "hi" , "worl" , "haaaaaa" , "dfklkfdlsfkd"]))

// OUTPUT :- dfklkfdlsfkd
