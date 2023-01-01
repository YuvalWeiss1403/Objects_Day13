//Ex0 -1
//------------------------------------------------------------------------------------------------------------------
const student = {
    name: "Yuval",
    age: 21,
    grade: 100,
    classes: ["math","english","sports"]
}

console.log(student.name);

//Ex0 -2
//------------------------------------------------------------------------------------------------------------------
const book = {
    title: "Matilda",
    author: "Roald Dahl",
    year: 1988,
    genre: "novel",
    publisher: "Jonathan Cape",
    pages: 232,
    isbn: "47483221"
}

book.rating = 92 ;

//Ex0 -3
//------------------------------------------------------------------------------------------------------------------

const car = {
    make: "Tesla",
     model: "Model S",
     year: 2020,
     color: "Red",
     features: ["Autopilot", "Ludicrous Mode", "Supercharging"]
}

console.log(`second features: ${car.features[1]}`);

//Ex0 -4
//------------------------------------------------------------------------------------------------------------------
const store ={
    name:"",
    location:"",
    categories:["","",""],
    products:[
        {name:"coke", price:123, quantity:3},
        {name:"fanta", price:456, quantity:2},
        {name:"sprite", price:789, quantity:1}
    ],
}

function totalPrice (productName){
    for (let i = 0; i < store.products.length; i++) {
        if(store.products[i].name === productName){
            return store.products[i].price*store.products[i].quantity;
        }
    }
    return NaN;
}

console.log(totalPrice("coke"));


//Ex1-1
//------------------------------------------------------------------------------------------------------------------
const person ={
    name: "Alon",
    age: 26,
    height: 1.87,
    weight: 95,
    listPerson: function(){
        console.log(`person name: ${person.name}, age: ${person.age},height: ${person.height},weight: ${person.weight}`);
    }
}
person.listPerson();

//Ex1-2
//------------------------------------------------------------------------------------------------------------------
// function objectLength(obj){
//     return obj.length();
// }

// console.log(objectLength(person));

//Ex1-3
//------------------------------------------------------------------------------------------------------------------
let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

//1)
function displayGroceries(){
    let fruits;
    for (let i = 0; i < groceries.fruits.length; i++) {
        fruits += ` ${groceries.fruits[i]}`;
    }
    console.log(fruits);
}

//2-6)
function cloneGroceries(){
    let user =client;
    console.log(`user: ${user}`);
    client = "Betty";
    console.log(`client ${client}`);
    console.log(`user: ${user}`);
    let shopping =groceries;
    groceries.totalPrice = 35;
    console.log(`shopping total price: ${shopping.totalPrice}`);
    groceries.paid = false;
    console.log(`shopping total price: ${shopping.paid}`);

}
cloneGroceries();


//Ex2
//------------------------------------------------------------------------------------------------------------------
const books = {
    booksArray:[
    {title: "The Hobbit", author:"J.R.R.",alreadyRead: false},
    {title: "Harry Poter", author:"J.K rolling",alreadyRead: true},
    {title: "Matilda", author:"Roald Dahl",alreadyRead: true}
],
    printbooks: function(){
        for (let i = 0; i < books.booksArray.length; i++) {
            console.log(`${books.booksArray[i].name} by ${books.booksArray[i].author}`);
        }
    },
    printifbooksread: function(){
        for (let i = 0; i < books.booksArray.length; i++) {
            if (books.booksArray[i].alreadyRead == true){
                console.log(`You already read ${books.booksArray[i].name} by ${books.booksArray[i].author}`);
            }
            else {
                console.log(`You still need to read ${books.booksArray[i].name} by ${books.booksArray[i].author}`);
            }
        }
    }
}

books.printbooks();
books.printifbooksread();


//Ex3
//------------------------------------------------------------------------------------------------------------------

const myPenguin = {
    name:"Pingo",
    Origin: "Rasmus Klump",
    Author:"Carla and Vilhelm Hansen",
    Notes:"One of Rasmus' best friends."
}

console.log(`Hello, i'm a penguin and my name is ${myPenguin.name} `);

myPenguin.canFly = false;

myPenguin.chirp = function(){
    console.log("CHIRP CHIRP! Is this what penguins sound like");
}

myPenguin.sayHello = function(){
    console.log(`Hello, i'm a penguin and my name is ${this.name} `);
}

myPenguin.sayHello();

myPenguin.name = "Penguin McPenguinFace";
myPenguin.sayHello();

myPenguin.fly = function(){
    if(this.canFly){
        console.log("I can fly!");
    }else{
        console.log( "No flying for me");
    }
}

myPenguin.fly();

myPenguin.canFly = true;
myPenguin.fly();

//Ex4
//------------------------------------------------------------------------------------------------------------------

myPenguin.favoriteFoods = ["Fish","Water","Shells"];

console.log(`My penguin's second favorite food: ${myPenguin.favoriteFoods[1]}`);

let firstFavFood = "Fish";

myPenguin.favoriteFoods.push("ice");

let favoriteFoodsLength = myPenguin.favoriteFoods.length;
console.log(favoriteFoodsLength);

myPenguin.favoriteFoods[favoriteFoodsLength-1] = "pineapples";


let lastFavFood =  myPenguin.favoriteFoods[favoriteFoodsLength-1];

for (let i = 0; i < favoriteFoodsLength; i++) {
    console.log(myPenguin.favoriteFoods[i]);    
}

//Ex5
//------------------------------------------------------------------------------------------------------------------
const gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    },
  };

const ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    },
  };
  
const fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    },
  };


let penguins  = [gunter,ramon,fred];

console.log(penguins[0]);

let secondPenguin =penguins[1];

console.log(penguins[penguins.length-1].name);

penguins.push(myPenguin);

console.log(penguins.length);

penguins[0].canFly = true;

penguins[0].sayHello();

for (let i = 0; i < penguins.length; i++) {
    console.log(penguins[i].name);    
}

for (let i = 0; i < penguins.length; i++) {
    penguins[i].sayHello()  
}

for (let i = 0; i < penguins.length; i++) {
    penguins[i].numberOfFeet = 2;
}

for (let i = 0; i < penguins.length; i++) {
    if(penguins[i].canFly){
        console.log(`${penguins[i].name} can fly!`);
    }else{
        continue;
    }
}
  
//Ex6
//------------------------------------------------------------------------------------------------------------------
const store2 = {
    name:"BuildABear",
    location: "Hamleys London",
    categories:["Stuffed animals","Clothes","Shoes"],
    products:[
        {name: "Bunny", price: 25, quantity: 50 },
        {name: "Bear", price: 27, quantity: 70},
        {name: "Mouse", price: 23, quantity: 30}
    ]
}

function totalPriceStore2(name){
    for (let i = 0; i < store2.products.length; i++) {
        if(name== store2.products[i].name){
            return store2.products[i].price*store2.products[i].quantity;
        }
    }
    return "no match"
}

//Ex7
//------------------------------------------------------------------------------------------------------------------
const school = {
    name:"",
    location:"",
    students:[
        {name: "yuval", age:12,grade:6, classes:["sports","english","Computer Science"]},
        {name: "alon", age:17,grade:12 ,classes:["math","Physics","Science"]}
    ],
    teachers:[
        {name: "tamar", subject:"math",gradeLevels:[10,11,12]},
        {}
    ]
}

function IfStudentInClass(studentName , teacherName){
    let teacherclass;
    let answer = false;
    for (let i = 0; i < school.teachers.length; i++) {
        if(school.teachers[i].name==teacherName){
            teacherclass = school.teachers[i].subject;        
        }
    }
    for (let i = 0; i < school.students.length; i++) {
        for (let j = 0; j <  school.students[i].classes.length; j++) {
            if(school.students[i].classes[j]==teacherclass){
                answer=true;
            }
        }             
    }
    return answer;
}

console.log(IfStudentInClass("alon","tamar"));


//Ex8
//------------------------------------------------------------------------------------------------------------------
const library = {
    name: "Springfield Public Library",
    location: "Springfield",
    books: [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        genre: "Novel",
        publisher: "Charles Scribner's Sons",
        pages: 180,
        isbn: "978-0-7432-6555-2",
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        genre: "Novel",
        publisher: "J.B. Lippincott & Co.",
        pages: 281,
        isbn: "978-0-044-93349-2",
      },
      {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951,
        genre: "Novel",
        publisher: "Little, Brown and Company",
        pages: 214,
        isbn: "978-0-316-76953-3",
      },
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        genre: "Novel",
        publisher: "T. Egerton",
        pages: 279,
        isbn: "978-0-141-19031-4",
      },
    ],
  };

  function booksInGenre(genre){
    let titlesByGenre =[];
    for (let i = 0; i < library.books.length; i++) {
        if(library.books[i].genre==genre){
            titlesByGenre.push(library.books[i].title)
        }        
    }
    return titlesByGenre;
  }
  