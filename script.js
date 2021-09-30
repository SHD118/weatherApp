var inputText = document.getElementById("inputCity")
var button = document.getElementById("button-addon2");
var fiveDay = document.getElementById("5day")
var weatherDetail = document.getElementById("weather_detail")
var finalValue = [];
button.addEventListener("click", function () {
    var inputGlobal = inputText.value;
    dataInput(inputGlobal);
    dataInput2(inputGlobal);
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
            for (let i = 0; i < data.list.length; i++) {
                // console.log(data.list[i].main.temp_min)
               

                var dt = data.list[i].dt_txt
                var temp = data.list[i].main.temp
                var humid = data.list[i].main.humidity
                var icon = data.list[i].weather[0].icon
                console.log("icon " + icon)
                let tempString = `http://openweathermap.org/img/wn/${icon}.png`
                var wind = data.list[i].wind.speed;
                let creatElemtn = $(`<div class="col-2">
                <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${dt}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${temp}</h6>
                    <p class="card-text"><img src = "${tempString}"/></p>
                    <p class="card-text">${humid}</p>
                    <p class="card-text">${wind}</p>
                </div>
               </div>
               </div>`)
               
 creatElemtn.appendTo(fiveDay)

            }

        })

}





function dataInput2(input) {
    const myKey = "8d16f28b545852d623de7ad3baf04f51";

    console.log(input)
    console.log(myKey)
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=" + myKey)
      
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log("ytrds")
            console.log(data)

            return data;

        })
        .then(function (data) {
            // for (let i = 0; i < data.length; i++){
                var pTagName = document.createElement("h1")
                var pTagTemp = document.createElement("p")
                var pTagWind = document.createElement("p")
                var pTagHumidity = document.createElement("p")
                var pTagUV = document.createElement("p")
                pTagName.textContent = data.name;
                pTagTemp.textContent = data.main.temp;
                pTagWind.textContent = data.wind.speed;
                pTagHumidity.textContent = data.main.humidity;
                pTagUV.textContent = data.uvi
                // pTagName.append(weatherDetail)
            weatherDetail.appendChild(pTagName)
            weatherDetail.appendChild(pTagTemp)
            weatherDetail.appendChild(pTagWind)
            weatherDetail.appendChild(pTagHumidity)
            weatherDetail.appendChild(pTagUV)
            // }
            return;
        })

}


