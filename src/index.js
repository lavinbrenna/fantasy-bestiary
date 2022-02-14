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
https://www.dnd5eapi/co/api/monsters/abeleth

const query = $(#name).text();

Air Elemental
 
F-I
J-N
O-Z
*/


function displayAThruE(arr) {
  for (let i = 0; i <= 99; i++) {
    $("#flipbook").append(`<div id="page">${arr.results[i].name}</div>`);
  }
}
function displayFThruI(arr){
  for (let i = 100; i <= 175; i++) {
    $("#flipbook").append(`<div id="page">${arr.results[i].name}</div>`);
  }
}
function displayJThruM(arr){
  for(let i = 176; i <= 202; i++) {
    $("#flipbook").append(`<div id="page">${arr.results[i].name}</div>`);
  }
}
function displayNThruU(arr){
  for(let i = 203; i <= 286; i++){
    $("#flipbook").append(`<div id="page">${arr.results[i].name}</div>`);
  }
}
function displayVThruZ(arr){
  for(let i = 287; i <= 331; i++){
    $("#flipbook").append(`<div id="page">${arr.results[i].name}</div>`);
  }
}
$(document).ready(function () {
  MonsterList.getMonsterList().then(function (monsterListResponse) {
    console.log(monsterListResponse);
    if (monsterListResponse instanceof Error) {
      throw Error("Sorry there was an error");
    }
    const monsterList = monsterListResponse;
    console.log(monsterList);
    console.log(monsterList.results[0].name);
    displayAThruE(monsterList);
    displayFThruI(monsterList);
    displayJThruM(monsterList);
    displayNThruU(monsterList);
    displayVThruZ(monsterList);
    
  });
});
