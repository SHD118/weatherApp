var inputText = document.getElementById("inputCity")
var button = document.getElementById("button-addon2");
var fiveDay = document.getElementById("5day")
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
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&cnt=5" + "&appid=" + myKey)
        // fetch("api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8d16f28b545852d623de7ad3baf04f51")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            finalValue = data;
            // console.log(finalValue)
            return data;

        })
        .then(function (data) {
            let weatherArray = []
            for (let i = 0; i < data.list.length; i++){
                // console.log(data.list[i].main.temp_min)
               
                var dt = data.list[i].dt_txt
                var temp = data.list[i].main.temp
                var humid = data.list[i].main.humidity
                // var icon = data.list[i].weather.icon
                var wind = data.list[i].wind.speed;
           
            }
            
        })
 

   
}


// createweekForCast(){

// }

