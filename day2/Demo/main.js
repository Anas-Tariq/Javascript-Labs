/******************************************* Task 1 *******************************************/
var weather = degree => {
    degree >= 30? console.log("Today Is Hot") : console.log("Today Is Cold");
}

weather(140);
/******************************************* Task 1 *******************************************/


/******************************************* Task 2 *******************************************/
// var weather1 = (temp, actualTemp) => {
//     if (temp < 30 && temp > 25 && actualTemp < 30 && actualTemp > 25) console.log ("Normal")
//     else if ( temp < 25 &&  actualTemp < 25) console.log ("Cold")
//     else if ( temp > 30 &&  actualTemp > 30) console.log ("Hot")
//     else console.log ("You are sick, Go see a doctor");
// }

// weather1(26, 27)

// We cant use ternary conditional because there are more than 2 conditions
/******************************************* Task 2 *******************************************/


/******************************************* Task 3 *******************************************/
// var faculty = "FCI"
// switch(faculty) {
//     case "FCI":
//         console.log("You’re eligible to Programing tracks");
//         break;
//     case "Engineering":
//         console.log("You’re eligible to Network and Embedded tracks");
//         break;
//     case "Commerce":
//         console.log("You’re eligible to ERP and Social media tracks");
//         break;
//     default:
//         console.log("You’re eligible to SW fundamentals track")
// }
/******************************************* Task 3 *******************************************/


/******************************************* Task 4 *******************************************/
// var rangeArr = [];
// var oddRange = (start, end) => {
//     for (var i = start; i < end; i++) {
//         if (i % 2 !== 0) {
//             rangeArr.push(i);
//         }
//     }
// }
// oddRange(1, 10)
// console.log(rangeArr)
/******************************************* Task 4 *******************************************/




/******************************************* Task 5 *******************************************/
// var userName = prompt("Enter your name");
// // var birthYear = parseInt(prompt("Enter birth day"));

// while (eval(userName)) {
//     alert("Wrong Input, Please try again");
//     userName = prompt("Enter your name");
// }

// var birthYear = parseInt(prompt("Enter your Birth Year"));

// while (isNaN(birthYear)) {
    
//     alert("Please enter a valid birth day!");
//     birthYear = parseInt(prompt("Enter your Birth Year"));
// }


// var age = 2022 - birthYear;
// console.log(`
//     Name: ${userName}
//     Birth Day: ${birthYear}
//     Age: ${age}
// `)


/*************************************** Task 5 *******************************************/



/******************************************* Task 6 *******************************************/

// var side1 = parseInt(prompt("Enter 1st Side"));
// var side2 = parseInt(prompt("Enter 2nd Side"));
// var side3 = parseInt(prompt("Enter 3rd Side"));

// if (side1 + side2 + side3 != 180) {
//     console.log("This is not a triangel, please enter a valid degrees");
//     console.log(side1 + side2 + side3)
// }else if (side1 === side2 && side1 === side3) {
//     console.log("Triangle is equilateral")
// } else if (side1 === side2 || side1 === side3 || side2 === side3) {
//     console.log("Triangle is isosceles")
// } else {
//     console.log("Triangle is scalene ")
// }
/******************************************* Task 6 *******************************************/


/******************************************* Task 7 *******************************************/
// var studentDegree = [60, 100, 10, 15, 80];
// console.log(Math.max(...studentDegree));
// for (var i=0; i<studentDegree.length; i++) {
//     if (studentDegree[i] < 60) console.log(Low Degree: ,studentDegree[i])
// }

/******************************************* Task 7 *******************************************/


/******************************************* BONUCE *******************************************/
// var a = parseInt(prompt("Enter 1st Number"));
// var b = parseInt(prompt("Enter 2nd Number"));
// var c = parseInt(prompt("Enter 3rd Number"));
// var d = parseInt(prompt("Enter The result"));

// if (a * b + c === d || a * b - c === d || a + b * c === d || a - b * c === d || a + b - c === d || a - b + c === d) console.log ("YES")
// else console.log("NO!!")
/******************************************* BONUCE *******************************************/



