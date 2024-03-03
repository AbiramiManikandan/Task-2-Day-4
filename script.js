//Print odd numbers in an array
// Arrow Function
const oddNumbersArray = Array.from({ length: 50 }, (_, i) => (i * 2) + 1);
console.log(oddNumbersArray);


//Convert all the strings to title caps in a string array
// Arrow Function
const stringArray = ["hello world", "this is a test", "javascript is fun"];

const titleCaseArray = stringArray.map(str =>
    str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
);

console.log(titleCaseArray);


//Return all the prime numbers in an array
// Arrow Function
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const primeNumbers = (numbers) => {
    return numbers.filter((num) => isPrime(num));
};

// Example usage
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Prime numbers:", primeNumbers(numbers));


//Return all the palindromes in an array
// Arrow Function
const isPalindrome = (str) => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
};

const palindromes = (strings) => {
    return strings.filter((str) => isPalindrome(str));
};

// Example usage
const strings = ["madam", "racecar", "hello", "level", "world"];
console.log("Palindromes:", palindromes(strings));
