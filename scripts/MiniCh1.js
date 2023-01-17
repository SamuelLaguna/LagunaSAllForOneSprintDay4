let nameInput = document.getElementById("nameInput");
let helloReturn = document.getElementById("helloReturn");
let helloSubBtn = document.getElementById("helloSubBtn");
//console.log(nameInput, helloReturn, helloSubBtn);
let savedInput = "";
let sayHelloUrl = "";
helloSubBtn.addEventListener("click", function () {
      gethelloApi(nameInput)
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
function gethelloApi(nameInput){
    var letters = /^[A-Za-z]+$/;
    if(nameInput.value.match(letters)){
        savedInput = nameInput.value;
        sayHelloUrl = "https://samuelsallforone.azurewebsites.net/AllMiniCh/Hello/" + savedInput;
        urlCall(sayHelloUrl)
    }else{
        helloReturn.textContent = "Enter a valid respsonse";
    }
}