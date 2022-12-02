// var user="ali";
// console.log("iti aswan");
// ///
// ///
// ////
// /////
// ///
// console.log("iti aswan");
// var op="+"
// var a=10;
// var b=20;
// var res=0;
//     switch(op){

//         case "+":
//             res=a+b;
//             break;
//         case "-":
//             res=a-b;
//             break;
//     }

// function show() // define function 
// {
//     console.log("you in function show");
//     console.log('iti');
//     var res=10+20;
// }
// show();

// var op="+"
// var a=10;
// var b=20;
// var res=0;
//     switch(op){

//         case "+":
//             res=a+b;
//             break;
//         case "-":
//             res=a-b;
//             break;
//     }
// function clac(a,b,op)  //
// {
//     var res=0;
//     switch(op){
//         case "+":
//             res=a+b;
//             break;
//         case "-":
//             res=a-b;
//             break;
//         case "*":
//             res=a*b;
//             break;
//         case "/":
//             res=a/b;
//             break;
//         default:
//             res="not vlaid";
//     }
//     return res;
// }
// function display()
// {
//     console.log(user);
//     var d="ahmed";
// }
// display();
// console.log(res);
// var total=clac(10,20,"+");
// var totoal2=clac(5,2,"-");
// var totoal3=clac(5,2,"#");
// console.log(total)
// console.log(totoal2)
// console.log(totoal3);
// if(true)
// {
//     let age=30;
// }
// console.log(age)


// function call()
// {
//    //console.log("call back function")

//    return 10;
// }
// function display(call)
// {

//     return call;
// }
// var x =display(call);
// console.dir(x);
// var arr=[10,20,function()
// {
//     console.log('jjjijiwd')
// }]
// arr[2]();
////////////////////////////////////////////Objects////////////////////////////////////////////

// var name="hager";
// var age1=22;
// var address1="cairo";
// var phone1=0122233444;
// var jobTitle1="frontEnd";
// var name2="ahmed";
// var age1=25;
// var address1="alex";
// var phone1=0122233444;
// var jobTitle1="backEnd";
var obj_hager={
    name:"hager",
    age:22,
    address:"cairo",
    jobTitle:"frontEnd",
    phone:01122233,
    faculty:'arts',
    isgratued:true,
    display:function()
    {
        console.log('aswan');
    }
}
// console.log(obj_hager.name)
// console.log(obj_hager.jobTitle);
// obj_hager.jobTitle="FullStack";

// console.log(obj_hager.jobTitle);

// //1-bulit in objects  => Date Math Array String, Number ,Boolean 
// var num=10;

// var num1=new Number(10);
///     012345678
var str="iti aswan"; // object String // implicit  permative data type string
var s=new String('iti aswan'); // explicit object String


s.name="ahmed";

s.display=function()
{
    console.log('object Stirng');
}
// s.display();
// console.log(str);
// console.log(s);

// console.log(str.charAt(0)); // 
// console.log(s.charAt(8));

// console.log(str.indexOf("i"));
// console.log(s.lastIndexOf("i"));
// console.log(str.indexOf("x"))
// var sub=str.substring(-3,-1);
// var sub2=str.slice(-4,-2);
// var sub=str.substring(9,4);
// var sub2=str.slice(4,0);
// console.log(sub);
// console.log(sub2);
// var sstr2=str.concat(" ggydgywwdggy");
// console.log('abc'.charCodeAt(1));
// console.log(sstr2)
// str.x="jijiidwwdw";
//////////////////////////////////////////////////
// var now=new Date(); // create object type from Date
// var month=["jan","feb","mar","abr","may","jun","jule","agu","spe","oct","nov","des"];
// console.log(now.getDate())
// console.log(now.getFullYear());
// console.log(month[now.getMonth()]);
// now.setFullYear(1998);
// now.setDate(20);
// now.setMonth(3);
// console.log(now);

// var date=new Date(1998,6,16);
// console.log(date)   

// console.log(Math.sqrt(36))

// console.log(Math.pow(2,3));


// console.log(Math.floor(3.9)); 

// console.log(Math.ceil(3.1));

// console.log(Math.round(3.4));
// console.log(Math.floor( Math.random()*100))


var user=prompt("enter name");
// var flag=parseInt(user);
// flag==NaN
//isFinite // string convert  
//isNaN  // true string  false number
var flag=isNaN(user);
if(flag)
{

}
else
{

}
// console.log(isNaN(user));











