
function printName(){
    let element = document.getElementById("name-input-box");
    console.log(element.value);
    let heading = document.getElementById("username");
    heading.textContent = "Sold to "+element.value;

}

let goBtn = document.getElementById("go-button");
//goBtn.onclick = ()=>{console.log("Clicked on button")};
goBtn.onclick = printName;

function offerClick(){
    console.log("Test");
    let inputBox = document.getElementById("offer-input-box")
    console.log(inputBox.value);

    let offer = document.getElementById("offer-heading")

    if(inputBox.value < 500){
        offer.textContent = "Offer too low!"

    }else{
        offer.textContent = "New Offer of $"+inputBox.value+" has been sent"
    }
}

let submitOfferBtn = document.getElementById("Submit-offer-button")
submitOfferBtn.onclick = offerClick;

/*
console.log("Hello, World!");
let a = "HELLO!"
let b = "Bye!"



console.log(a+b);

a = 5
console.log(a+b);

if(a > 5){
    console.log("A is >5")
}

for(let i=0;i<5;i++){
    console.log("Row #"+i)
}

let arr = [1, 5, 87, 23, 72, "E"];
arr.push("Q")
for(let index in arr){
    console.log(arr[index])
}
let value = arr.pop();
arr.push(9)
console.log(arr);
console.log(value);

function test(){
    console.log("I am a test function")
    return 5;
}
function hello(){
    console.log("I am the hello function")
    return 5;
}

function doSomething(thingToDo){
    let val = thingToDo();
    return val;
}

arr.push(test);
doSomething(hello);

doSomething(test);
console.log(arr);
*/
