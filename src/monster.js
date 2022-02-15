export default class MonsterService {  
  static getMonster(index) {
    return fetch(`https://www.dnd5eapi.co/api/monsters/${index}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}