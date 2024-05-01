function updateCity() {
  let cityData = document.querySelector("#new-york");
  let cityDate = cityData.querySelector(".date");
  let cityTime = cityData.querySelector(".time");
  cityElement = moment().tz("America/New_York");

  cityDate.innerHTML = cityElement.format("MMMM Do YYYY");
  cityTime.innerHTML = cityElement.format("HH:mm:ss [<small>]A[</small>]");
}
updateCity();
setInterval(updateCity, 1000);

function updateCityTime() {
  let milanData = document.querySelector("#milan");
  let milanDate = milanData.querySelector(".date");
  let milanTime = milanData.querySelector(".time");
  milanElement = moment().tz("Europe/Rome");

  milanDate.innerHTML = milanElement.format("MMMM Do YYYY");
  milanTime.innerHTML = milanElement.format("HH:mm:ss [<small>]A[</small>]");
}
updateCityTime();
setInterval(updateCityTime, 1000);
