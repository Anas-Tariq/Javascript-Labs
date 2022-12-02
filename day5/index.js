

// var div=document.getElementById("mydiv"); // serach by id retrun elem 


// var classDiv=document.getElementsByClassName("cldiv"); // retur array of object that have same class

// var allDivs=document.getElementsByTagName("div"); // return all divs 

// var namediv=document.getElementsByName("ndiv");

// var queryid=document.querySelector("#mydiv>div"); // if want 

// var queryclass=document.querySelectorAll(".cldiv");
// console.log(queryid)

// console.log(queryclass)


// div.style.color="green";
// queryid.style.color="orange"

// console.log(queryid)

// namediv[0].innerText="hi in js"
// console.log(namediv)
// classDiv[1].style.color="green";
// console.log( typeof div);

// function change()
// {
//     // div.style.color="red"

//     // div.innerText="iti aswan";
//     for(var i=0;i<allDivs.length;i++)
//     {
//         if(i%2==0)
//         {
//             allDivs[i].style.backgroundColor="grey";
//         }
//     }
// }
// setTimeout(change,2000)


// truthy vlaues => any ex 0 "" null undefiend
// falsey values => 0 "" null undefiend
// if(!0) // 0== flase
// {
//     console.log("zero")
// }
// else console.log("hi");

function show()
{
  var username=document.getElementById("myname");
  var gender=document.getElementsByName("gender");
  var myCar=document.getElementById("myselect");
//   console.log(myCar.selectedIndex) //index 
//   console.log(myCar.options[myCar.selectedIndex]) // array options
    console.log(myCar.options[myCar.selectedIndex].value)
  for(var i=0;i<gender.length;i++)
  {
    if(gender[i].checked==true)
    {
        console.log(gender[i].value)
    }
  }

    // console.log(username.value);
  if(!username.value) //=> == username.value==""
  {
    // username.style.border="3px red solid";
    //username.setAttribute("class","worng");
    username.setAttribute("name","user");
    username.classList.add("worng");
  }
  else
  {
    username.classList.remove("worng");
   // username.removeAttribute("class");
    console.log(username.value);
  }
 
}


function over()
{

    var img=document.getElementById('myimg');
    img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXY1EPq4fjKmUJHB9RaGQApX3EAGFnbLOOmg&usqp=CAU"
    //img.setAttribute("src")
}

function leave()
{
    var img=document.getElementById('myimg');
    img.src="download.jpeg"
}
// var img=document.getElementById('myimg');
// var pathImages=["download.jpeg","download1.jpeg","download2.jpeg"]

// var i=0;
// var time=setInterval(function(){

//     img.src=pathImages[i];
//     i++;
//     if(i>pathImages.length-1)
//     {
//         clearInterval(time)
//     }
// }, 3000);


function create()
{

    var p=document.createElement("p");
    p.innerText="hi im created now :)";
    // p.style.backgroundColor="grey";
    // p.style.margin="30px";
    // p.style.padding="5px"
    p.classList.add('cls')
   document.body.appendChild(p);
   console.log(document.body)

}


function save()
{
    var todo=document.getElementById("todo");
    var input=document.getElementById("input");
    var li=document.createElement('li');
    var del=document.createElement("button");
    del.innerText="delte";
    li.innerHTML="<h2>"+input.value+"</h2>";
    li.onclick=function()
    {
        li.classList.toggle("finsh")
    }
    del.onclick=function()
    {
        li.remove();
        del.remove()
    }
    todo.appendChild(li);
    todo.appendChild(del)

    //todo.innerHTML+="<li class='finsh'>"+input.value+"</li>"

}

function display()
{
    console.log('hihihihiwd')
}
function display2()
{
    console.log('jjij')
}

var but=document.getElementById("but");
but.addEventListener("click",display);
but.addEventListener('click',display2);
setTimeout(function()
{
    but.removeEventListener("click",display);
},5000)

