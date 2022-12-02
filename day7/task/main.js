function Box (width, height, books) {
    this.width = width;
    this.height = height;
    this.books = books;
}


Box.prototype.calcArea = function () {
    console.log(this.width * this.height);
}

function Book (id, name, writer, numOfPages) {
    this.id = id;
    this.name = name;
    this.writer = writer;
    this.numOfPages = numOfPages;

    this.setID = function(_id) {
        if(_id > 0) {
            id = _id;
        }
    }
    this.getID = function() {
        return id;
    }
}

Book.prototype.display = function() {
    console.log('Book name is: ' + this.name + ' | for the wirter ' + this.writer + ' and contains ' + this.numOfPages + ' pages');
}

Box.prototype.display = function() {
    console.log(this.books);
}

Object.prototype.valueOf = function () {
    var pagesSum = 0;
    this.books.forEach(element => {
        pagesSum += element.numOfPages;
    });
    return console.log(pagesSum);
}



var book1 = new Book(1, 'Grokking Algorithms', 'Aditya Bhargava', 354);
var book2 = new Book(2, 'You Don\'t Know JS Yet', 'Kyle Simpson', 265);
var book3 = new Book(3, 'Clean Code', 'Robert Cecil Martin', 431);
book1.display();
book2.display();
book3.display();



var box1 = new Box(12, 20, [book1, book2, book3]);
var box2 = new Box(2, 10, [book2, book3])
// box1.display();
// box1.valueOf();
// box1.calcArea();
// box2.calcArea();

function point3D (x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
}
point3D.prototype.print = function () {
    console.log('3DPoint: X=' + this.x + ', Y=' + this.y + ' Z=' + this.z);
}
point3D.prototype.calculateDistnce = function(p2) {
    var difX = Math.pow((p2.x - this.x), 2)
    var difY = Math.pow((p2.y - this.y), 2)
    var difZ = Math.pow((p2.z - this.z), 2)
    console.log(Math.sqrt(difX + difY + difZ));
}

var p1 = new point3D(5, 65, 8);
var p2 = new point3D(20, 72, 4);
p1.print();

p1.calculateDistnce(p2);