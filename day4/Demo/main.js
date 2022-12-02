/*********************************** Task 1 ***********************************/
function startTimer() {

    alert("Clock Started");
    setInterval(()=> {
        var localTime = new Date().toLocaleTimeString();
        document.write(localTime);
    }, 1000);
}
/*********************************** Task 1 ***********************************/



/*********************************** Task 2 ***********************************/
function goToLinkedIn() {
    window.open("https://www.linkedin.com/feed/", "LinkedIn", "_blank")
}
/*********************************** Task 2 ***********************************/



/*********************************** Task 3 ***********************************/

var advertise;
function openAd() {
    setTimeout(function() {
        advertise = window.open("", "name","");
        advertise.document.write("Hello")
    }, 3000)
}
function closeAd() {
    advertise.close();
}
/*********************************** Task 3 ***********************************/



/*********************************** Task 4 ***********************************/
// console.log(typeof(window.scrollY))

// function bodyOnScroll() {
//     if(window.scrollY > 777) {
//         alert("Hi");
//     }
// }
/*********************************** Task 4 ***********************************/




/*********************************** Task 5 ***********************************/
var fullName = prompt("Enter Your Full Name");
var emailAddress = prompt("Enter Your Email");

var checkFullName = /[a-zA-Z]{4,}$/;
var checkEmail = /^[a-zA-Z0-9]{7,10}@[a-z]{4,10}(.)[a-z]{3,5}.eg$/;


while(checkFullName.test(fullName)) {
    alert("Wrong Input");
    fullName = prompt("Enter Your Full Name");
}

while(checkEmail.test(emailAddress)) {
    alert("Wrong Input");
    emailAddress = prompt("Enter Your Email");
}

console.log()
console.log()
/*********************************** Task 5 ***********************************/



