async function weatherApi() {
  const weatherPromise = await fetch(
    "https://api.weather.gov/gridpoints/MFL/110,50/forecast"
  );
  const weatherData = await weatherPromise.json();
  const miamiTemperature = weatherData.properties.periods[0].temperature;
  document.querySelector("#temperature").textContent = miamiTemperature;
  console.log(miamiTemperature);
}

weatherApi();

async function petsArea() {
  const petsPromise = await fetch(
    "https://learnwebcode.github.io/bootcamp-pet-data/pets.json"
  );
  const petData = await petsPromise.json();
  petData.forEach((pet) => {
    console.log(pet.name);
  });
}

petsArea();
