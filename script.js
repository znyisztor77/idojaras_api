let cards = document.getElementById('cards')


const BASE_URL = "https://api.open-meteo.com/v1/forecast?"
const LATITUDE = "latitude=47.5317"
const LONGITUDE ="longitude=21.6244"
const DAILY = "temperature_2m_max,temperature_2m_min,rain_sum"

fetch(`${BASE_URL}${LATITUDE}&${LONGITUDE}&daily=${DAILY}`)
.then(res => res.json())
.then(data =>{
       // console.log(data);
       for(let i = 0; i <7 ;i++){
        card = `<div class="card">
        <div class="date">${data.daily.time[i]}</div>
        <div class="max_temp">${data.daily.temperature_2m_max[i]}°C</div>
        <div class="max_temp">${data.daily.temperature_2m_min[i]}°C</div>
        <div class="rain_sum">${data.daily.rain_sum[i]}mm</div>
    </div>`
    cards.innerHTML += card
       }
})

