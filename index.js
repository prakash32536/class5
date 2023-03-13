// what will be the output of the sintex

let str = "hello\""
console.log(str.length)

// ans is 6  bcz this is (\") one charecter


// explore includes

let sentence = "hello, my name is Prakash Das"
let word = "Das"
let word2 = "hello"
let word3 = "das"
console.log(`the word "${word}" ${sentence.includes(word)? " is ": " is not "} in the sentence`)

// explore startswith

console.log(`the sentence ${sentence.startsWith(word3)? " starts with " : " is not starts with "} " ${word3} "`)

// explore endswith 

console.log(`the sentence ${sentence.endsWith(word)? " ends with " : " is not ends with "} " ${word} "`)


// write a program to convert a given string to lowercase

let sentence2 = "Hi, My name is Prakash Das"

console.log(sentence2.toLowerCase())


// ectract number from the given string 

let str2 = "please give Rs 1000"
let amount = Number.parseInt(str2.slice("please give Rs ".length))
console.log(amount)
console.log(typeof amount)

// can you change the fourth carecter of the given string 

let friend  =  "Rahul"
friend[3] = "t"
console.log(friend)   // wwe can't change a string bcz it is immutable
