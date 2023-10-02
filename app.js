// CURRENT
// fetch("https://apis.scrimba.com/openweathermap/data/2.5/weather?q=almaty&units=metric")
//   .then(res => res.json())
//   .then(data => console.log(Math.round(data.main.temp)))

// Base API: https://api.open-meteo.com/v1/forecast?latitude=43.2567&longitude=76.9286

// CURRENT
// 1 day API: https://api.open-meteo.com/v1/forecast?latitude=43.2567&longitude=76.9286&hourly=temperature_2m,rain,snowfall&windspeed_unit=ms&forecast_days=1
// 

const times = document.querySelectorAll('.time')
const weatherStates = document.querySelectorAll('.weather-state')
const temps = document.querySelectorAll('.temperature')

fetch('https://api.open-meteo.com/v1/forecast?latitude=43.2567&longitude=76.9286&hourly=precipitation_probability,temperature_2m&forecast_days=1')
  .then(res => res.json())
  .then(data => {
    const totalTemp = data.hourly.temperature_2m
    const sediment = []
    const mainTemp = []
    for (let i = 0; i < totalTemp.length; i+=3) {
      mainTemp.push(Math.round(totalTemp[i]))
      sediment.push(data.hourly.precipitation_probability[i])
    }
    temps.forEach((temp, index) => {
      temp.textContent = mainTemp[index] + '+'
      if (mainTemp[index] > 14) {
        temp.classList.add('warm')
      }
      else {
        temp.classList.add('lower-warm')
      }
    })
  })

fetch('https://api.open-meteo.com/v1/forecast?latitude=43.2567&longitude=76.9286&hourly=cloudcover&forecast_days=1')
  .then(res => res.json())
  .then(data => {
    const cloudPercent = []
    const time = []
    for (let i = 0; i < data.hourly.cloudcover.length; i+=3) {
      cloudPercent.push(data.hourly.cloudcover[i])
      time.push(data.hourly.time[i].slice(11, 13))
    }
    weatherStates.forEach((state,index) => {
    })
    console.log(data)
  })

