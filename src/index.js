import $ from "jquery";
import "turn.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
//import MonsterService from './monster.js';
import MonsterList from "./monster-list.js";

/*
table of contents
A-E
Abeloth
https://www.dnd5eapi/co/api/monsters/${query}

const query = $(#name).text();

Air Elemental
 
F-I
J-N
O-Z
*/

$(document).ready(function () {
  MonsterList.getMonsterList().then(function (monsterListResponse) {
    if (monsterListResponse instanceof Error) {
      throw Error("Sorry there was an error");
    }
    const monsterList = monsterListResponse;
    console.log(monsterList);
  });
});
