let Question1 = document.getElementById("Question1");
let Question2 = document.getElementById("Question2");
let Btn1 = document.getElementById("Btn1");
let inputReturn = document.getElementById("inputReturn");

let savedInput1 = "";
let sayHelloUrl = "";
let savedInput2 = "";

Btn1.addEventListener("click",function(){
    getQuestion(Question1, Question2);
});


function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(data =>
        {
            inputReturn.textContent = data
            console.log(data)
        }
    )
}


function getQuestion(Question1, Question2){
    savedInput1 = Question1.value;
    savedInput2 = Question2.value;
    sayHelloUrl = `https://samuelsallforone.azurewebsites.net/AllMiniCh/Question/${savedInput1}/${savedInput2}`;
    urlCall(sayHelloUrl)
}