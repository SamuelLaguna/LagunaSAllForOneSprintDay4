let Btn1 = document.getElementById("Btn1");
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let great = document.getElementById("great");



savedInput1 = "";
savedInput2 = "";
sayHelloUrl = "";

Btn1.addEventListener("click",function(){
    getGTLT(number1, number2);
});


function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(data =>
        {
            great.textContent = data;
            console.log(data)
        }
    )
}

function getGTLT(number1, number2){
    savedInput1 = number1.value;
    savedInput2 = number2.value;
    sayHelloUrl = `https://samuelsallforone.azurewebsites.net/AllMiniCh/GreaterLess/${savedInput1}/${savedInput2}`;
    urlCall(sayHelloUrl)
}