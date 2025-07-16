const fetchData = async () => {
  const response = await fetch('https://postman-echo.com/get?foo1=bar1&foo2=bar2');
  const data = await response.json();
  console.log(data);
};
fetchData().catch(error => console.error('Error fetching data:', error));

// Use map() to multiply each number in [1,2,3,4] by 10.
// map return new array.
const numbers = [1, 2, 3, 4];
console.log(numbers.map(n => n* 10))

// Use filter() to keep only strings from ["js", 1, "node", 2].
//Creates a new array with all elements that pass the test implemented by the provided function.
const mixedArray = ["js", 1, "node", 2];
const stringsOnly = mixedArray.filter(item => typeof item === 'string');    

// Create a const object with name & age and use destructuring
const users = {name: 'John', age: 30};
const {name, age} = users
console.log(name);

// Write an arrow function that checks if a number is even
const number = (num) =>{
  return num % 2 === 0;
}
console.log(number(4)); // true
console.log(number(5)); // false

// for each loop to print each element in an array
//Executes a function for each element in the array.
const arr1 = ["sai", "maha", "banu", "suku"];
arr1.forEach(n => console.log(n)); 

// promise to resolve after 2 seconds
const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("2sec");
  }, 2000
);
});
promise.then(result => console.log(result));

//setInterval to log "hey" every 2 seconds
setInterval(() => {
  console.log("hey")
}, 2000)