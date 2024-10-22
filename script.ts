//* PRIMITIVE TYPES

let studiedJavascript: boolean = true;

if(studiedJavascript){
    console.log("You can still learn more about Typescript");
} else {
    console.log("You should learn Javascript first");
}

let interMiami: number = 11;
let fcDallas: number = 11;
let messi: number = 10;
let messiPlay: boolean = true;

function play(team1: number, team2: number, messiPlay: boolean): void {
    let reason: string = ''
    if(messiPlay) {
        team1 += messi;
        reason = 'because Messi is playing';
    }
    if(team1 > team2) console.log('The winner is Inter Miami' + reason);
    if(team1 < team2) console.log('The winner is FC Dallas');
    if(team1 === team2) console.log('It is a draw');
}

play(interMiami, fcDallas, messiPlay);

let disney: any;
disney = 'StarWars and Marvel';
console.log(disney);

disney = 15000000000
console.log(disney);

disney = true;
console.log(disney);

//* ARRAYS

let strArr: string[] = ['HTML, CSS, JS, TS'];

let numArr: number[] = [1, 2, 3, 4, 5];

//* LITERAL OBJECTS

let programmer = {
    name: 'Marce Malacalza',
    age: 26,
    technologies: ['HTML', 'CSS', 'JS', 'TS'],
    drinksMate: true
}

programmer = {
    name: 'Pepe Grillo',
    age: 30,
    technologies: ['C++', 'React', 'SQL', 'Node'],
    drinksMate: false
}

//* TYPES

type Developer = {
    name: string;
    age: number;
    technologies: string[];
    drinksMate?: boolean | null;
}

let developer: Developer = {
    name: 'Marce Malacalza',
    age: 26,
    technologies: ['HTML', 'CSS', 'JS', 'TS'],
    drinksMate: true
}

let developer2: Developer = {
    name: 'Pepe Grillo',
    age: 30,
    technologies: ['C++', 'React', 'SQL', 'Node'],
    drinksMate: null
}

//* INTERFACES

interface Developer2 {
    name: string;
    age: number;
    technologies: string[];
    drinksMate?: boolean | null;
}

let dev: Developer2 = {
    name: 'Marcelinho Malacalza',
    age: 26,
    technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
    drinksMate: true
}

function sendResume(dev: Developer2): void {
    console.log(`Hello, my name is ${dev.name}, I am ${dev.age} years old and I know how to use the following technologies: ${dev.technologies.join(', ')}`);
    if(dev.drinksMate !== null) {
        if(dev.drinksMate) {
            console.log('I drink mate');
        } else {
            console.log('I do not drink mate');
        }
    }
}

sendResume(dev)


