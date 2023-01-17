let Btn1 = document.getElementById("Btn1");
let noun1 = document.getElementById("noun1");
let verb2 = document.getElementById("verb2");
let noun2 = document.getElementById("noun2");
let randomeWord = document.getElementById("randomeWord");
let noun3 = document.getElementById("noun3");
let adjective1 = document.getElementById("adjective1");
let noun4 = document.getElementById("noun4");
let adjective2 = document.getElementById("adjective2");
let verb1 = document.getElementById("verb1");
let lastWord = document.getElementById("lastWord");
let here = document.getElementById("here");

savedInput1 = "";
savedInput2 = "";
sayHelloUrl = "";
savedInput3 = "";
savedInput4 = "";
savedInput5 = "";
savedInput6 = "";
savedInput7 = "";
savedInput8 = "";
savedInput9 = "";
savedInput10 = "";
Btn1.addEventListener("click",function(){
    getMad(savedInput1, savedInput2, savedInput3, savedInput4, savedInput5, savedInput6, savedInput7, savedInput8, savedInput9, savedInput10);
});


function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(data =>
        {
            here.textContent = data;
            console.log(data)
        }
    )
}

function getMad(savedInput1, savedInput2, savedInput3, savedInput4, savedInput5, savedInput6, savedInput7, savedInput8, savedInput9, savedInput10){
    savedInput1 = noun1.value;
    savedInput2 = verb2.value;
    savedInput3 = noun2.value;
    savedInput4 = randomeWord.value;
    savedInput5 = noun3.value;
    savedInput6 = adjective1.value;
    savedInput7 = noun4.value;
    savedInput8 = adjective2.value;
    savedInput9 = verb1.value;
    savedInput10 = lastWord.value;
     sayHelloUrl = `https://samuelsallforone.azurewebsites.net/AllMiniCh/MadLib/${savedInput1}/${savedInput2}/${savedInput3}/${savedInput4}/${savedInput5}/${savedInput6}/${savedInput7}/${savedInput8}/${savedInput9}/${savedInput10}`;
     urlCall(sayHelloUrl)
}
