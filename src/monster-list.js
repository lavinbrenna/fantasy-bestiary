export default class MonsterList{
  static getMonsterList() {
    return fetch(`https://www.dnd5eapi.co/api/monsters/`)
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