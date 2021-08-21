
//Dom Selection
const confirmed = document.querySelector('.confirmed')
const death = document.querySelector('.death')
const recovered = document.querySelector('.recovered')
const area = document.querySelector('.area')
const population = document.querySelector('.population')
const loca = document.querySelector('.location')
const date = document.querySelector('.date')

// Get data from API
fetch('https://covid-api.mmediagroup.fr/v1/cases?country=Indonesia')
  .then(response => response.json())
  .then(response => {
    let data = response.All

    // Data
    let confirmedData = numberFormat(data['confirmed'])
    let deathData = numberFormat(data['deaths'])
    let recoveredData = numberFormat(data['recovered'])
    let areaData = numberFormat(data['sq_km_area'])
    let populationData = numberFormat(data['population'])
    let dateData = data['updated'].slice(0, 11)

    // Set data to HTML
    confirmed.innerHTML = confirmedData
    death.innerHTML = deathData
    recovered.innerHTML = recoveredData
    area.innerHTML = areaData + ' km²'
    population.innerHTML = populationData
    loca.innerHTML = data['location']
    date.innerHTML = dateData
  })

function numberFormat(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}