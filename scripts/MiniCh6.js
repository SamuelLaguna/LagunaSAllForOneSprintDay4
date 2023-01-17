let Btn1 = document.getElementById("Btn1");
let num1 = document.getElementById("num1");
let sum = document.getElementById("sum");

sayHelloUrl = "";
savedInput1 = "";

Btn1.addEventListener("click",function(){
    getOdd(num1);
});

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(data =>
        {
            sum.textContent = data;
            console.log(data)
        }
    )
}

function getOdd(num1){
    savedInput1 = num1.value;
    sayHelloUrl = `https://samuelsallforone.azurewebsites.net/AllMiniCh/OddorEven/${savedInput1}`;
    urlCall(sayHelloUrl)
}