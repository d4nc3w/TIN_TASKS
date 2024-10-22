var arr = [5, 7, 7, 9, 0, 1];
arr.y = 'hello';
var counter = 0;

for(var i of arr){
    console.log(i);
    counter++;
}

console.log("Size of [" + arr + "] is equal to " + counter);
//size 6 because for of doesn't count object y