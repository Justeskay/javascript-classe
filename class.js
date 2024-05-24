
    // javascript object

    const person = {
        name: "john",
        age: 30,
        job: "mobile app developer"
    }
console.log(person.name)



const dog = {
    breed: 'pitbull',
    color: 'black',
    bark: function (){
        console.log('woof woof')
    }
}
console.log(dog.bark())
console.log("i AM HAPPY!!!!!!!!!!!!!")


const student = {
    name: 'alice',
    grades: {
        math: 90,
        english: 95,
        biology: 85
    }
}

console.log(student.grades.english)





// json (javascript object notation)
const jsonstring = '{"name": "john", "age": 30 }'

const convertedinobject = JSON.parse(jsonstring)

console.log(convertedinobject)


// callback and asynchronous javascript

console.log("program 1: start");

console.log("program 2: start");

setTimeout(()=>{
    console.log("this third program has been delayed by 10 seconds")
}, 10000);

setTimeout(()=>{
    console.log("this fourth program has been delayed by 5 seconds")
}, 5000);

console.log("program 5: start")


// callback

function greet(name, callback){
    console.log("hello" + name)
    callback()
}

function saygoodbye(){
    console.log('goodbye')
}

console.log(greet("moses", saygoodbye))


function fetchData(callback){
    setTimeout(() => {
        callback("data fetched")
        callback()
    }, 3000);
}

function processData(){
    console.log("data processed")
}

fetchData(processData)


// ES6 FEATURES

// ARROW function

const add = function(a,b){
return a+b
}

console.log(add(10,20))


const add1 = (a,b)=>{
return a+b
}

console.log(add(10,15))


// template literals/string

const name1 = 'james bond';

const message =  `hello ${name1}`

console.log(message)

const product = 'laptop';
const price = 1000;

const statement = `the price of 
the ${product} is $${price}`


// destructuring
const person1 ={
    name2: 'doe' ,
    age2: '45'
}

const {name2, age2} = person1;

console.log('this is for ${name2} and ${age2}')


const numbers1 = [1,2,3];

const [first, second, last] = numbers1;

console.log(second)
console.log(last)
console.log(first);


const objectnigeria = {
    riverstate: '23LGA' ,
    lagosstate: '20LGA' ,
    anambrastate: '21LGA' ,
    deltastate: '25LGA' ,
}

const {riverstate, lagosstate, anambrastate, deltastate} = objectnigeria

console.log(anambrastate)


const student1 = {name: 'alice', grade3: 'A'};

const {name:studentname, grade3} = student1

console.log(studentname)


const human = {name5: 'Bob', age: 25, city: 'harrisburg PA'};

const {name5, ...rest} = human;

console.log(name5);
console.log(rest)


const originalarray = [1,2,5]

const copiedarray = [...originalarray]

console.log(copiedarray)

const array3 = [6,2,1];
const array1 = [3,3,3];

const mergedarray = [...array3, ...array1]

console.log(mergedarray)















