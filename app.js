const API_KEY = `1f151e30f8efcda4c9dc20b668ab5a66`;
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const searchTempareture = () =>{
    const city =  document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemp(data))
}

const  setInnerText =(id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemp = temp => {
setInnerText('city' ,temp.name);
setInnerText('hot' ,temp.main.temp);
setInnerText('condition' ,temp.weather[0].main)
//icon
const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
    const icon = document.getElementById('weather-icon');
    icon.setAttribute('src' , url);

}