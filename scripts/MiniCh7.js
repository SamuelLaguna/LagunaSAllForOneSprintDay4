let Btn1 = document.getElementById("Btn1");
let rev = document.getElementById("rev");
let word1 = document.getElementById("word1");

sayHelloUrl = "";
savedInput1 = "";

Btn1.addEventListener("click",function(){
    getReverse(word1);
});

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(data =>
        {
            rev.textContent = data;
            console.log(data)
        }
    )
}


function getReverse(word1){
    savedInput1 = word1.value;
    sayHelloUrl = `https://samuelsallforone.azurewebsites.net/AllMiniCh/Reverse/${savedInput1}`;
    urlCall(sayHelloUrl)
}