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


function displayAThruZ(arr) {
  for (let i = 0; i <= 99; i++) {
    $("#aThruE").append(`<div id="page">${arr.results[i].name}</div>`);
  }
  for (let i = 100; i <= 175; i++) {
    $("#fThruI").append(`<div id="page">${arr.results[i].name}</div>`);
  }
  for(let i = 176; i <= 202; i++) {
    $("#jThruM").append(`<div id="page">${arr.results[i].name}</div>`);
  }
  for(let i = 203; i <= 286; i++){
    $("#nThruU").append(`<div id="page">${arr.results[i].name}</div>`);
  }
  for(let i = 287; i <= 331; i++){
    $("#vThruZ").append(`<div id="page">${arr.results[i].name}</div>`);
  }
}

function attachListeners(){
  $('.aThruE').on('click', function(){
    $("#aThruE").toggle();
    $("#fThruI, #jThruM, #nThruU, #vThruZ").hide();
  });
  $('.fThruI').on('click', function(){
    $("#fThruI").toggle();
    $("#aThruE, #jThruM, #nThruU, #vThruZ").hide();
  });
  $('.jThruM').on('click', function(){
    $('#jThruM').toggle();
    $("#fThruI, #aThruE, #nThruU, #vThruZ").hide();
  });
  $('.nThruU').on('click', function(){
    $('#nThruU').toggle();
    $("#fThruI, #jThruM, #aThruE, #vThruZ").hide();
  });
  $('.vThruZ').on('click', function(){
    $('#vThruZ').toggle();
    $("#fThruI, #jThruM, #nThruU, #aThruE").hide();
  });
}

$(document).ready(function () {
  attachListeners();
  $("#fThruI, #jThruM, #nThruU, #aThruE, #vThruZ").hide();
  MonsterList.getMonsterList().then(function (monsterListResponse) {
    console.log(monsterListResponse);
    if (monsterListResponse instanceof Error) {
      throw Error("Sorry there was an error");
    }
    const monsterList = monsterListResponse;
    displayAThruZ(monsterList);
  });
});
