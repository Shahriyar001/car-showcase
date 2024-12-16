// const fetch = require("node-fetch");

export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "67f86cf385msh2f4feadd7f3b554p18ac50jsn454fc3e201de",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}
