// var  age=25;
// var age2=age; ///  copy value 

// age=30;
// console.log(age2);

// var str="iti"
// var str1=str;
// str="aswan";

// var arr=new Array(10,20,30);
// var arr2=new Array([...arr]);
// arr=new Array(60);
// console.log(arr2)
// var obj={}; //  ref type
// var o=obj; //  two way  // ref copy
// var o2=Object.create(); // value copy 
// obj.name="negm"
// console.log(o2);
// obj.age=30;
// o.address="aswan";
// console.log(obj)
// var x;
// var user=10;
// console.log(user);
// var x=null;
// console.log(typeof user)

/////////////////////////////////////////////////////////////////////////////
// console.log(user);  // 
// var user=10;
// console.log(typeof x);
// var x=function()
// {
//     alert("x");
// }
// solve();
// x();
// function solve()
// {

//     alert();
// }

////////////////////////////////////////////////////////////////////
// console.log(4>3<2); //   4>3 true =>1   1>2  coercion implicit 
// console.log(10+"ssghg") // coercion 
// var num="hhh";
// var num1=10;
// console.log(num1+"iti"); /// 
// num=num*1;
// console.log(typeof num);
// console.log(num);
// parseInt ,Number  // coercion explicit
///////////////////////////////////////////////////////////////////////////////////


// var num=Number('10$20');  // NAN  // Class == function object
// console.log(typeof num)
// var num2=parseInt("10x20") //  10  s

// console.log(typeof num2)
///////////////////////////////////control statements////////////////////////////////////////

// var gender= confirm("are you male");

// var userName=prompt("enter your name")



// if(gender==true)
// {
//     console.log("Mr," ,userName);
// }

// else
// {
//     console.log("Ms," ,userName);
// }

// var t1=prompt('enter your height');
// var t2=prompt('enter your height');
// var t3=prompt('enter your height');


// if(t1>t2&&t1>t3)
// {
//     console.log("t1 is the tallest");
// }

// else
// {

//     if(t2>t1&&t2>t3)
//     {
//         console.log("t2 is the tallest");
//     }
//     else
//     {
//         console.log("t3 is the tallest");
//     }
// }
// else if(true)
// {
//     console.log("t2 is the tallest");
// }
// else
//     {
//         console.log("t3 is the tallest");
//     }


// var jobtitile="backeend"; 
// switch(jobtitile)  // jobtitile=="fullstack"
// { 
//     case "FullStacke": // ==jobtitile 
//         console.log("welldone");
//         break;
//     case "backeend":
//         console.log('very nice');
//        break;
//     case "frontend":
//         console.log('fantitsc');
//         break;
//     default:
//         console.log("keep going");
// }


// for(start, endcondtion, steps)

// for(var i=1;i<=10;i++)
// {
//     console.log(i);
// }
// console.log("out loob",i);
// var enter=prompt('enter zero to stop');
// while(enter!='0')
// {
//     console.log("iti");
//     enter=prompt('enter zero to stop');
// }
// do{
//     var enter=prompt('enter zero to stop');
//     console.log("iti");
// }while(enter!='0')
//////////////////////////////////////////////////////////////////////
var arr=[10,20,30,40]; // implicit
var arr2=new Array()   // explicit;
// console.log(arr.length);
// console.log(arr[arr.length-1]);
// var arr3=[10,"negm","duhdguwdhwd",true,{user:"ahmed",age:30}];
// console.log(typeof arr3[3])
var result=0;
for(var i=0;i<arr.length;i++)
{
    console.log("res=", arr[i],"+",result)
   result=result+arr[i];
}
// arr.push(100);
// console.log(arr);
// arr.pop();
// arr.shift();
// arr.unshift(7);
// console.log(arr);


var a=[1,5,6,10000000,100,2,4,2000,300404];
a.sort(function(x,y){return y-x});  // 
console.log(a);















