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
