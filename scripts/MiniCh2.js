let helloReturn = document.getElementById("helloReturn");
let helloSubBtn = document.getElementById("helloSubBtn");
let numberInput1 = document.getElementById("numberInput1");
let numberInput2 = document.getElementById("numberInput2");
//console.log(nameInput, helloReturn, helloSubBtn);
let savedInput1 = "";
let sayHelloUrl = "";
let savedInput2 = "";
helloSubBtn.addEventListener("click", function () {
     getNumbers(numberInput1, numberInput2); 
})
function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(data =>
        {
            helloReturn.textContent = data
            console.log(data)
        }
    )
}



function getNumbers(numberInput1, numberInput2){
    savedInput1 = numberInput1.value;
    savedInput2 = numberInput2.value;
    sayHelloUrl = `https://samuelsallforone.azurewebsites.net/AllMiniCh/Adding/${savedInput1}/${savedInput2}`;
    
    urlCall(sayHelloUrl)

     
}

// sayHelloUrl = "https://samuelsallforone.azurewebsites.net/AllMiniCh/Adding/4/5";
//     urlCall(sayHelloUrl);
