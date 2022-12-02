/********************* Task 1 *********************/ 
var userName = document.getElementById('user-name');
var userPassword = document.getElementById('password');
var submitForm = document.getElementById('submit-form');


submitForm.addEventListener('click', (event) => {
    event.preventDefault();
    var userInfo = {
        name: userName.value,
        password: userPassword.value
    }
    localStorage.setItem('user', JSON.stringify(userInfo))
    document.cookie=`user=${userName.value};exprise="date.toDateString()";`
})
/********************* Task 1 *********************/





/********************* Task 2 *********************/
var container = document.querySelector('.products-container');

var product = new XMLHttpRequest();
product.open('GET', 'https://dummyjson.com/products');
product.send();
product.onreadystatechange = function () {
    if(product.readyState == 4 && product.status == 200) {
        // console.log(product.responseText);
        
        console.log(JSON.parse(product.responseText).products)
        var products = JSON.parse(product.responseText).products
        
        for (var i = 0; i < products.length; i++) {
            var newDiv = document.createElement('div');
            var imgContainer = document.createElement('div');
            var newImg = document.createElement('img');
            var newTitle = document.createElement('h3');
            var newDescription = document.createElement('p');
            var newPrice =document.createElement('span');
            var newDiscount =document.createElement('span');
            var newButtonContainer = document.createElement('div')
            var newBtn = document.createElement('button')
            var addProduct = JSON.stringify(products[i]);
           

            newImg.setAttribute('src',products[i].thumbnail);
            newTitle.innerText = products[i].title;
            newBtn.onclick = () => {
                console.log(addProduct)
            }
            
            // newBtn.addEventListener('click', (e) => {
            //     console.log(addProduct)
            //     var getProducts = JSON.parse(localStorage.getItem("cartProduct")) || [];
            //     getProducts.push(addProduct);
            //     localStorage.setItem("cartProduct", JSON.stringify(addProduct))
            // })
            newBtn.innerText = `Add To Cart`;
            

            
            
            newDiv.appendChild(imgContainer);
            imgContainer.appendChild(newImg);
            newDiv.appendChild(newTitle);
            newDiv.appendChild(newDescription);
            newDiv.appendChild(newButtonContainer);
            newButtonContainer.appendChild(newBtn);
            container.appendChild(newDiv);
            newDiv.setAttribute('class', 'product-card');
        }


    }
}
function addToCart (item) {
    
}

// {
   
//     var x=JSON.parse(localStorage.getItem("cart"))||[];
//     x.push(z);
//     localStorage.setItem("cart",JSON.stringify(x))
//  }
/********************* Task 2 *********************/



/********************* Task 3 *********************/
// var todosList = document.getElementById('todosList');
// var callRequest = new XMLHttpRequest();
// callRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos');
// callRequest.send();
// callRequest.onreadystatechange = function () {
//     if (callRequest.readyState == 4 && callRequest.status == 200) {
//         var todos = JSON.parse(callRequest.responseText);
//         console.log(todos)

//         for(var i = 0; i < todos.length; i++) {
//             var completedTodos = todos[i].completed;
//             console.log(completedTodos)

//             if (completedTodos == true) {
//                 todosList.innerHTML += `<li>${i} - ${todos[i].title}</li>`
//             }

//         }
//     }
// }

/********************* Task 3 *********************/