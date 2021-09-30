var inputText = document.getElementById("inputCity")
var button = document.getElementById("button-addon2");
var finalValue = [];
button.addEventListener("click", function () {
    var inputGlobal = inputText.value;
    dataInput(inputGlobal);
    // console.log(inputGlobal)

})

function dataInput(input) {
    const myKey = "8d16f28b545852d623de7ad3baf04f51";

    console.log(input)
    console.log(myKey)
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + input +  "&appid=" + myKey)
        // fetch("api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8d16f28b545852d623de7ad3baf04f51")
        //  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + input + "&cnt=15" + "&appid=" + myKey)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data)
            // finalValue = data;
            // console.log(finalValue)
            return data;

        })
        .then(data => {
            for (let i = 0; i < 5; i++) {
                Document.getElementById("weather_detail" + (i + 1) + "Min" + Number(data.list[i].main.temp_min ) + "deg")
            }
})

}

// createweekForCast(){

// }

