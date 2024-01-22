const API_KEY = `fe7b37281bb95d8a2bb46254b1d41025`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}


const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}


const displayTemperature = temperature => {
    console.log(temperature);
    setInnerText('city', temperature.name);
    setInnerText('temp', temperature.main.temp.toFixed(0));
    setInnerText('weather', temperature.weather[0].main);
    setInnerText('real', temperature.main.feels_like.toFixed(1));
    setInnerText('humid', temperature.main.humidity);

    // weather icon settings 
    const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('image-icon');
    imgIcon.setAttribute('src', url);
}


// BackGround
