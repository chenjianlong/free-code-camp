const getWeatherBtn = document.getElementById("get-weather-btn");
const locationSelector = document.getElementById("location-selector");

const getWeather = async (city) => {
  try {
    const res = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
    return await res.json();
  } catch (e) {
    console.log(e);
    return null;
  }
}

const showWeather = async (city) => {
  if (!city) return ;
  const data = await getWeather(city);
  if (!data || data?.error) {
    alert("Something went wrong, please try again later");
    return;
  }
  
  const { main, icon } = data?.weather[0];
  const { temp, feels_like, humidity } = data.main;
  const { speed, gust } = data.wind;
  let cityFormatted = city.split(' ').map(e=>e[0].toUpperCase() + e.slice(1)).join(' ');
  const displayElements = [
    [document.getElementById("location"), cityFormatted],
    [document.getElementById("main-temperature"), temp],
    [document.getElementById("weather-main"), main],
    [document.getElementById("feels-like"), feels_like],
    [document.getElementById("humidity"), humidity],
    [document.getElementById("wind"), speed],
    [document.getElementById("wind-gust"), gust]
  ];
  displayElements.forEach(element=>element[0].innerText = element[1] || "N/A")
  document.getElementById("weather-icon").src = icon; 
  document.getElementById("weather-info").style.display = "block";
};

getWeatherBtn.addEventListener("click", () => {
  showWeather(locationSelector.value);
});