var inputText = document.getElementById("inputCity")
var button = document.getElementById("button-addon2");
var fiveDay = document.getElementById("5day")
var weatherDetail = document.getElementById("weather_detail")
var resultList = document.getElementById("resultList")
var buttonPress = document.getElementsByClassName("btn-secondary");
var finalValue = [];

let savedCities = localStorage.getItem('savedCities') ? JSON.parse(localStorage.getItem('savedCities')) : []




for (let i = 0; i < savedCities.length; i++) {
    createItemFromStorage(savedCities[i])
}

button.addEventListener("click", function () {
   
    var inputGlobal = inputText.value;
    dataInput(inputGlobal);
    dataInput2(inputGlobal);
    
	let city = document.querySelector('#inputCity').value
	// console.log(city);

	// 1 you need to pass city to the funciton that gets city and places it on screen

	// 2 put the newly search city into local storage with other searched citys
	
	if(localStorage.getItem('savedCities')){
		 savedCities = JSON.parse(localStorage.getItem('savedCities')) 
	} 

    let flag = false;
    for (let i = 0; i < savedCities.length; i++){
        if (savedCities[i] === city) {
            alert("This city " + city + " already listed")
            flag = true;
            break;
     
        }
        
    }
    if (flag === false) {
        savedCities.push(city)
        // localStorage.setItem('savedCities', JSON.stringify(savedCities))
        localStorage.setItem('savedCities', JSON.stringify(savedCities))
        createItemFromStorage(city)
    }

	
	

})


function createItemFromStorage(value) {

    var leadTemp = document.createElement("button")
    leadTemp.classList.add("btn-secondary")
    leadTemp.textContent = value;
    resultList.appendChild(leadTemp)

    
}

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
            fiveDay.textContent = "";
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
                <div class="card" style=" background-color: blue">
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
            weatherDetail.textContent = "";
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

buttonPress.addEventListener("click", function () {
    let tempValue = e.target.value
    console.log(tempValue)
})
