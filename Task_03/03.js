let arr = [1, 4, 5, 7, 8, 9];
arr.y = 'hello';
let counter = 0;

for(let x in arr){
    counter++;
}

console.log("Size of [" + arr + "] is equal to " + counter);
//size 7 because for in counts object y as well