let x = "Good Morning!";
let y = "Good Evening!";

const d = new Date();
let currentTime = d.getHours();

if(currentTime < 15){
    console.log(x);
} else {
    console.log(y);
}