const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const APP_ID = 'a3ce77bbb57ff936751824c63acfda79';
const DEFAULT_VALUE = '__';

const search = $('#search');
const cityName = $('.city-name');
const weatherState = $('.weather-state');
const weatherIcon = $('.weather-icon');
const temperature = $('.temperature');

const sunrise = $('.sunrise');
const sunset = $('.sunset');
const humidity = $('.humidity');
const windSpeed = $('.wind-speed');


search.addEventListener('change', e => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
        .then(async res => {
            const data = await res.json();
            cityName.innerHTML = data.name || DEFAULT_VALUE;
            weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
            weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;

            sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm') || DEFAULT_VALUE;
            sunset.innerHTML = moment.unix(data.sys.sunset).format('H:mm') || DEFAULT_VALUE;
            humidity.innerHTML = data.main.humidity || DEFAULT_VALUE;
            windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || DEFAULT_VALUE;
        })
})