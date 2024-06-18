//Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, prameters

//Primitives

let age:number;

age= 12;

let username: string;

username= "admin"
let isInstructor :boolean;

isInstructor = true;

let hobbis: string[] = new Array();

hobbis.push(username);
hobbis.push("hello");

console.log(hobbis);

type Person = {name: string, age:number};
let person: Person = {
    name: "John",
    age: 10
} 

let people : Person[] = [
    {
        name: "John",
        age: 10
    },
    {
        name: "Vili",
        age: 19
    }
]


let something : string | boolean = true;

//Functions and types

function add(a :number,b :number):number{
    return a + b;
}

function printOutput(value: any) {
    console.log(value);
}

//Generics

function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array]

    return newArray;
}

const demoArray = [1,2,3,5]

const updatedArray = insertAtBeginning(demoArray, 2);