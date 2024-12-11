function anagram(firstWord , secondWord) {
    if (firstWord.length !== secondWord.length) {
        return false
    }
    let finalResult=true;
    firstWord = Array.from(firstWord)
    firstWord.map(element => {
        localResult = Array.from(secondWord).includes(element)
        // console.log(localResult);
        if (!localResult) {
            finalResult=false
        }
        
        
    });

    return finalResult?true:false
    
    

}

console.log(anagram("word" , "drow"))