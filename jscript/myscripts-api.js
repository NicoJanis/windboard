var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var wind = document.querySelector('.wind');
var button = document.querySelector('.submit');


button.addEventListener('click', function(name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=5f0ce22b4d50f95750ee5c6d75d04a19')
        .then(response => response.json())
        .then(data => {
            var tempValue = Math.round(data['main']['temp'] - 273.15);
            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];
            var windValue = data['wind']['speed'];
            var lon = data['coord']['lon'];
            var lat = data['coord']['lat'];

            main.innerHTML = nameValue;
            desc.innerHTML = "Desc - " + descValue;
            temp.innerHTML = "Temp - " + tempValue;
            wind.innerHTML = "Windspeed - " + windValue;
            print(lon);
            print(lat);
            input.value = "";

        })

    .catch(err => alert("Cityname not found"));
})