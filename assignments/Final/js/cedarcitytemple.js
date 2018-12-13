/*don't forget to remove http: before submiting!*/
var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','//api.openweathermap.org/data/2.5/weather?zip=84720,us&appid=fe0ec9562268abb1426c10181a4c0e42&units=imperial',true);
/*zip=92028*/
weatherObject.send();

weatherObject.onload = function(){
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

   /* document.getElementById('place').innerHTML = weatherInfo.name;*/
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp + "&deg;F";
    document.getElementById('currentWind').innerHTML = weatherInfo.wind.speed;
    document.getElementById('Humidity').innerHTML = weatherInfo.main.humidity;
    var iconcode = weatherInfo.weather[0].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;
}//end of the function