const template = document.querySelector("#pet-card-template");
const petContainer = document.createDocumentFragment();

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
    const clone = template.content.cloneNode(true);
    clone.querySelector("h3").textContent = pet.name;
    clone.querySelector(".pet-description").textContent = pet.description;
    clone.querySelector(".pet-age").textContent = pet.birthYear;
    petContainer.appendChild(clone);
  });
  document.querySelector(".list-of-pets").appendChild(petContainer);
}

petsArea();
