function stringTransform(str) {
    const length = str.length;

    // Check if length is divisible by 15
    if (length % 15 === 0) {
        return str.split('').reverse().join('').split('').map(char => char.charCodeAt(0)).join(' ');

    // If length is divisible by 5 only
    } else if (length % 5 === 0) {
        return str.split('').map(char => char.charCodeAt(0)).join(' ');

    // If the length is divisible by 3 only
    } else if (length % 3 === 0) {
        return str.split('').reverse().join('');
    } 
    
    else {
        return str;
    }
}

//Example
const str1 = "Hamburger";             
const str2 = "Pizza";                 
const str3 = "Chocolate Chip Cookie";  

console.log(stringTransform(str1)); 
console.log(stringTransform(str2)); 
console.log(stringTransform(str3)); 
