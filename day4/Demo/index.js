//var url = "http://maps.google.com/maps?q="+ x.coords.latitude + ",+" +x.coords.longitude ;
function send()
{
    // var reg=/^j.*t$/

    // console.log(reg.test("jstddwuhwduhwdjhwdjht"));

    var phone=/^(01)(1|2|5|0)[0-9]{8}$/;

    console.log(phone.test("011s25727"))
}

// var reg=/^j.*t$/;

// var phone=/^(01)(1|2|5|0)[0-9]{8}$/   
// console.log(phone.test("0192572727"))
// var email=/^[a-zA-Z]{,20}[0-9]@[a-z]{4,10}(.)[a-z]{3,5}/
////////////////////////////error///////////////////////////
// var num1=parseInt(prompt("enter frsit number"));
// var num2=parseInt(prompt("enter frsit number"));

// var err= new Error('new error');

// console.dir(err);
// var ref=new ReferenceError();

// try
// {
//     if(num2==0)
//     {
//        alert("if cond")
//         throw err;
       
//     }
//     else if(num2==1)
//     {
//         throw "want div one"
//     }

//     document.write(num1/num2);

// }
// catch(error)
// {
    
//     alert(error);
// }

//////////////////////////////////BOM///////////////////////////////////////////
// borwser object model 
// timeing methods 

// function display()
// {
//     alert("hi")
// }
// setTimeout(display,3000)  // at once 
// var time=setInterval(function() // every to sec fire
// {
//     console.log("iti")
// },2000);
// setTimeout(function()
// {
//     clearInterval(time)
// },10000)
 ////  012345678
// var str="iti aswan";
// var newin=window.open('',"name","_blank");
// newin.document.write("iti aswan");
// setTimeout(function()
// {
//  newin.close();
// },2000)

// var i=0;
// var time=setInterval(function(){ //o (n) *1000
    
//     document.write(str[i]); //o(1)
//     i++
//     if(i>=str.length)
//     {
//         clearInterval(time)
//     }
// }, 1000);

console.log(navigator.platform);

function solve(x)
{
    var url = "http://maps.google.com/maps?q="+ x.coords.latitude + ",+" +x.coords.longitude ;
    window.open(url,"")
}
// navigator.geolocation.getCurrentPosition(solve) // event loop  solve(coords)
// console.log(z);
// var getdata=Database.getTable("users");



function go()
{

    location.assign("main.html");
}


function back()
{
    history.back();
}









