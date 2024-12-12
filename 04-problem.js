function palindrome(parameter) {
    let rev = [...parameter].reverse().toString()    
    if (rev == [...parameter]) {
        return "Palindrome"
    }

    return "Not Palindrome"
    
}

console.log(palindrome("radar"));
