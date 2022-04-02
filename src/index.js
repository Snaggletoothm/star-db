fetch('https://swapi.dev/api/species/3/')
  .then(response => {
    return response.json();
  })
  .then(body => console.log(body));
