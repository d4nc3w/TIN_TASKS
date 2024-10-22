//correct sign
calculate(5, '*', 10);
//wrong sign
calculate(28, 'x', 10);
//not a number but convertable
calculate(345, '-', "10");
//nota a number not convertable
calculate(')(', '+', 12);

function calculate(num1, sign, num2){
    console.log("-----------------------")
    let type1 = typeof num1;
    let type2 = typeof num2;
    if(type1 === "number" && type2 === "number"){
        let equation = num1 + sign + num2;
        try{
            let result = eval(equation);
            console.log(equation + ' = ' + result);
        } catch(error){
            console.log("There is no math operator like: " + sign);
        }
    } else if (type1 === "number" && type2 !== "number"){
        console.log("One of the numbers wasn't of type number.");
        console.log("Converting...");
        try{
            num2 = Number(num2);
            if(!isNaN(num2)){
                let equation = num1 + sign + num2;
                try{
                    let result = eval(equation);
                    console.log(equation + ' = ' + result);
                } catch(error){
                    console.log("There is no math operator like: " + sign);
                }
            }
        } catch(error){
            console.log("Couldn't convert one of the numbers.");
        }
    } else if (type1 !== "number" && type2 === "number"){
        console.log("One of the numbers wasn't of type number.");
        console.log("Converting...");
        try{
            num1 = Number(num1);
            if(!isNaN(num1)){
                let equation = num1 + sign + num2;
                try{
                    let result = eval(equation);
                    console.log(equation + ' = ' + result);
                } catch(error){
                    console.log("There is no math operator like: " + sign);
                }
            } else {
                console.log("Couldn't convert one of the numbers.");
            }
        } catch(error){
            console.log("Couldn't convert one of the numbers.");
        }
    } else {
        console.log("One of the numbers wasn't of type number.");
        console.log("Converting...");
        try{
            num1 = Number(num1);
            num2 = Number(num2);
            if(!isNaN(num1) || !isNaN(num2)){
                let equation = num1 + sign + num2;
                try{
                    let result = eval(equation);
                    console.log(equation + ' = ' + result);
                } catch(error){
                    console.log("There is no math operator like: " + sign);
                }
            } else {
                console.log("Couldn't convert one of the numbers.");
            }
        } catch(error){
            console.log("Couldn't convert one of the numbers.");
        }
    }
}