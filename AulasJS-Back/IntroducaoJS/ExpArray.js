function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


let expArray = [];

for (let i = 0 ; i < 20 ; i++) {
    expArray.unshift(getRandomInt(101));
    console.log(expArray);
}

console.log(expArray.indexOf(77));

let mult7 = [];

expArray.forEach(element => {
    if (element % 7 == 0) {
        mult7.push(element);
    }
});

console.log(mult7.sort());

let mult9 = [];

for (let i = 0 ; i < 20 ; i++) {
    let numVez = getRandomInt(101);
    if(numVez % 9 == 0){
        mult9.push(numVez);
    }else{
        i--;
    }
}

console.log(mult9.sort());