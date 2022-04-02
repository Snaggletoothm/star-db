import SwapiService  from './services/swapi-service'


const swapi = new SwapiService();
swapi.getAllPeople().then(peoples => {
  peoples.forEach(people => {
    console.log(people.name);
  });
}); 

swapi.getPerson(3).then(each => console.log('>>> ' + each.name + ' <<<'));