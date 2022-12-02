/****************************** Task 1 ******************************/
var id1 = document.getElementById('id1');
var cls1 = document.getElementsByClassName('cls1');
var name1 = document.getElementsByName('name1');
var div1 = document.getElementsByTagName("div");
var qury1 = document.querySelector('#id1');
/****************************** Task 1 ******************************/





/****************************** Task 2 ******************************/
var legends = document.querySelectorAll('.legends');



document.querySelectorAll('.legends').forEach(image => {
    image.addEventListener('mouseover', function(e) {
        image.style.width = '400px'
    })

    image.addEventListener('mouseleave', function(e) {
        image.style.width = '292px'
    })
})
/****************************** Task 2 ******************************/


/****************************** Task 3 ******************************/
var addDiv = document.getElementById('add-div');
addDiv.addEventListener('click', function() {
    var createDiv = document.createElement('div');
    var createImg = document.createElement('img');

    document.body.appendChild(createDiv);
    createDiv.innerHTML = '<p>Hi, I\'m new child</p>';

    createImg.setAttribute('src', 'lol.jpg');
    createDiv.appendChild(createImg);
})
/****************************** Task 3 ******************************/






/****************************** Task 4 ******************************/
var input = document.querySelectorAll('.form-input');
var submitBtn = document.querySelector('#submit-btn');
var city = document.querySelector('#city');
input.forEach(element => {
    element.addEventListener('focus', e => {
        element.style.border = "1px solid red";
    })
    submitBtn.addEventListener('click', e => {
        e.preventDefault();
        console.log(element.value);
    })
})
console.log(city.value);
/****************************** Task 4 ******************************/






/****************************** Task 5 ******************************/
legPic = ['teemo.jpg', 'poppy.jpg', 'vex.jpg', 'tristana.jpg'];


var legendSlider = document.getElementById('legend-pic');
var prev = document.getElementById('prev');
var showAll = document.getElementById('show-all');
var stopSlider = document.getElementById('stop-slider');
var next = document.getElementById('next');

var legendIndex = 0;

legendSlider.setAttribute('src',legPic[legendIndex]);

next.addEventListener('click', e => {
    legendIndex++;    
    legendSlider.setAttribute('src',legPic[legendIndex]);
    if (legendIndex > legPic.length - 1) {
        legendIndex = 0;
    }
})

prev.addEventListener('click', e => {
    legendIndex--;    
    legendSlider.setAttribute('src',legPic[legendIndex]);
    if (legendIndex < 0 ) {
        legendIndex = legPic.length -1;
    }
})

var slidePic;

showAll.addEventListener('click', e => {
    slidePic = setInterval(() => {
        legendIndex++;
        legendSlider.setAttribute('src',legPic[legendIndex]); 
        if (legendIndex >= legPic.length - 1) {
            legendIndex = 0;
        }
    }, 1000)
})

stopSlider.addEventListener('click', e => {
    clearInterval(slidePic);
})

/****************************** Task 5 ******************************/