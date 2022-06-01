//Dom Selection
const confirmed = document.querySelector(".confirmed");
const death = document.querySelector(".death");
const recovered = document.querySelector(".recovered");
const area = document.querySelector(".area");
const population = document.querySelector(".population");
const loca = document.querySelector(".location");
const date = document.querySelector(".date");

// Get data from API
fetch("https://covid19.mathdro.id/api/countries/Indonesia")
  .then((response) => response.json())
  .then((response) => {
    let data = response;
    console.log(data);

    // Data
    let confirmedData = numberFormat(data.confirmed.value);
    let deathData = numberFormat(data.deaths.value);
    let recoveredData = numberFormat(data.recovered.value);
    let areaData = numberFormat(7810000);
    let populationData = numberFormat(275400000);
    let location = "Southeast Asia";
    let dateData = data.lastUpdate;

    // Set data to HTML
    confirmed.innerHTML = confirmedData;
    death.innerHTML = deathData;
    recovered.innerHTML = recoveredData;
    area.innerHTML = areaData + " km²";
    population.innerHTML = populationData;
    loca.innerHTML = location;
    date.innerHTML = dateData.slice(0, 10);
  });

function numberFormat(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
