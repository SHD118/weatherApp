var inputText = document.getElementById("inputCity")
var button = document.getElementById("button-addon2");

button.addEventListener("click", function () {
    var inputGlobal = inputText.value;
    dataInput(inputGlobal);
    // console.log(inputGlobal)
   
})

function dataInput(input) {
    const myKey = "8d16f28b545852d623de7ad3baf04f51";
    console.log(input)
    console.log(myKey)
    fetch("api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=" + myKey)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        })
    return data;
}