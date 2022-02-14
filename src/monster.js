export default class MonsterService {  
  static getMonster(name) {
    return fetch(`https://www.dnd5eapi.co/api/monsters/${name}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      })
  }
}