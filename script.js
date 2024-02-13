const ApiKey = "d5f94928c506eb0b1ecad1837f96c1dd";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather&units=metric"

searchBtn = document.querySelector(".searchBtn")



async function getWetherDataByCity(){
    
    try {
        var city = document.querySelector("input").value

        if(city === ""){
            document.querySelector(".weather").style.display = "none"
            document.querySelector(".error").style.display = "block";
        }
        else{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`);

        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none"
        }
        else{
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";


            const weatherData = await response.json();

        
      

        if(weatherData.weather[0].main == 'Clear'){
            document.querySelector(".weatherImg").src = "./asserts/SunnyDay.svg"
        }
        else if(weatherData.weather[0].main == 'Rain'){
            document.querySelector(".weatherImg").src = "./asserts/rain.svg"
        }
        else if(weatherData.weather[0].main == 'Clouds'){
            document.querySelector(".weatherImg").src = "./asserts/cloudy.svg"
        }
        else if(weatherData.weather[0].main == 'Drizzle'){
            document.querySelector(".weatherImg").src = "./asserts/drizzle.svg"
        }
        else if(weatherData.weather[0].main == 'Mist'){
            document.querySelector(".weatherImg").src = "./asserts/mist.svg"
        }

        document.querySelector(".city").innerHTML =weatherData.name 
        document.querySelector(".temp").innerHTML =Math.round( weatherData.main.temp) + '°C'
        document.querySelector(".humidity").innerHTML =weatherData.main.humidity + '%'
        document.querySelector(".wind").innerHTML =weatherData.wind.speed + 'km/h'
        document.querySelector(".climate").innerHTML = weatherData.weather[0].main
        }
        city.value = "";

        }
       
        
        
    } catch  {
        console.log("error from your side ....")
        
    }
    
}

searchBtn.addEventListener("click", ()=>{
    getWetherDataByCity();

})

