function sumUp(...numbers){
    let sum = 0;
    for(let x of numbers){
        sum += x;
    }
    console.log(sum);
}

sumUp(1, 6, 83, 3);