
console.log (`
----------Week04 Coding Project---------------- 
Question 1: Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
    - Do not use numbers to reference the last element, find it programmatically.
    - ages[7] - ages[0] is not allowed!`);

// Code below
/*
Take the value at the last index in the array (array[array.length-1]) and subtract the value at the first index (array[0])
*/
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

let difference = ages[ages.length-1]-ages[0];
console.log(`Last element value - first element value = ${difference}`);


console.log (`------
b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths.`);
// Code below
ages.push(13);
console.log(ages);
difference = ages[ages.length-1]-ages[0];
console.log(`New last element value - first element value = ${difference}`);

console.log (`------
c. Use a loop to iterate through the array and calculate the average age.`);
// Code below
let sum = 0;
for (i=0; i < ages.length; i++){    
    sum += ages[i];
}
console.log(`The average age is ${sum / ages.length}`)

console.log (`------
Question 2:  Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.`)
// Code below
names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
console.log(names)

console.log (`------
a. Use a loop to iterate through the array and calculate the average number of letters per name.`);
// Code below
/*
Add up the number of letters of the names in the array, then divide that by the number of names in the array
*/
let numLetters = 0;

for (i = 0; i < names.length; i++){
    numLetters += names[i].length;
} console.log(numLetters / names.length);

console.log (`------
b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.`);
// Code below
let namesConcat = '';

for (i = 0; i < names.length; i++){
    namesConcat += names[i] + ' ';
} console.log(namesConcat);

console.log (`------
Question 3:  How do you access the last element of any array?`)
// Code below
console.log(`
Elements in an array are accessed by their index. Arrays are 0 indexed, therefore the index of the last element is the "length of the array - 1": array[array.length-1] `);

console.log (`------
Question 4:  How do you access the first element of any array?`)
// Code below
console.log(`
Elements in an array are accessed by their index. Arrays are 0 indexed, therefore the index of the first element is "zero": array[0] `);

console.log (`------
Question 5:  Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
    For example:
    let names = ["Kelly", "Sam", "Kate"];    // starting with this array
    let nameLengths = [5, 3, 4];             // create a new array`)
// Code below
/*
Loop throught the 1st array, counting the number of letters in each name, and push the count to the 2nd array
*/
nameLengths = [];

for (i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);
} 
console.log(names);
console.log(nameLengths);

console.log (`------
Question 6:  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`)
// Code below
let arrSum = 0;

for (i = 0; i < nameLengths.length; i++){
    arrSum += nameLengths[i];
}console.log(arrSum);

console.log (`------
Question 7:  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').`)
// Code below

function concat(word, n){  
    var a = '';  
    for(i=0; i < n; i++){
        a += word;
    } console.log(a);
}
concat('JavaScript', 3);

console.log (`------
Question 8:  Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.`)
// Code below
fullName = (firstName, lastName) => console.log(`${firstName} ${lastName}`);

fullName("John", "Smith");

console.log (`------
Question 9:  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`)
// Code below
function sumArray(array){
    var add = 0;
    for(i=0; i < array.length; i++){
        add += array[i];
    } if (add > 100)
        return true;
        else return false;
}
console.log(sumArray([3, 9, 23, 64, 2, 8, 28, 93]));


console.log (`------
Question 10:  Write a function that takes an array of numbers and returns the average of all the elements in the array.`)
// Code below
function avgArray(array){
    let add = 0;
    for(i=0; i < array.length; i++){
        add += array[i];
    } return (add / (array.length));
}
console.log(avgArray([3, 9, 23, 64, 2, 8, 28, 93]));

console.log (`------
Question 11:  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.`)
// Code below
/*
Sum the total of each array and divide it by the number of elements in the array to get the average, then compare the averages
*/
function greaterAverage(arr1, arr2){
    let avg1 = arr1.reduce((sum, num) => sum + num, 0) / arr1.length;
    let avg2 = arr2.reduce((sum, num) => sum + num, 0) / arr2.length;

  return avg1 > avg2;
}
console.log(greaterAverage([3, 9, 27, 35], [2, 11, 25, 33]));

console.log (`------
Question 12:  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`)
// Code below
willBuyDrink = (isHotOutside, moneyInPocket) => {
    if (isHotOutside && moneyInPocket > 10.50)
    return true;
    else return false;
}
console.log(willBuyDrink(true, 10.51));

console.log (`------
Question 13:  Create a function of your own that solves a problem. In comments, write what the function does and why you created it.`)
// Code below
// To conserve water, people are asked to water their lawns once a week. However if there is more than an inch of rain during the week, they should not water the lawn. 
// Write a function to help a people determine if they need to water their lawn based on the weather forecast for the week.

const waterLawn = rain => {
    if (rain){
        console.log(`More than an inch of rain expected this week. Please save water, don't water the lawn.`);
    } else{
        console.log(`No more than an inch of rain is expected, so you can water the lawn once this week.`);
    }   

} 
waterLawn(prompt(`According to the weather forecast, is more than 1 inch of rain expected this week?

Click "Cancel" if only an inch of rain or less is expected.`));
