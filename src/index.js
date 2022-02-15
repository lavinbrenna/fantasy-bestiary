import $ from "jquery";
import "turn.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
//import MonsterService from './monster.js';
import MonsterList from "./monster-list.js";

// function 
// let monsterName = `${MonsterList.arr.results[i].name}`;
// $(`p#${monsterName}`).on('click', function() {
//   MonsterService.getMonster(monsterName)

function displayAThruZ(arr) {
  for(let i = 0; i <= 99; i++) {
    $("#aThruE").append(`<p class="beastName">${arr.results[i].name}</p>`);
  }
  for (let i = 100; i <= 175; i++) {
    $("#fThruI").append(`<p class="beastName" id="${arr.results[i].name}">${arr.results[i].name}</p>`);
  }
  for(let i = 176; i <= 202; i++) {
    $("#jThruM").append(`<p class="beastName" id="${arr.results[i].name}">${arr.results[i].name}</p>`);
  }
  for(let i = 203; i <= 286; i++){
    $("#nThruU").append(`<p class="beastName" id="${arr.results[i].name}">${arr.results[i].name}</p>`);
  }
  for(let i = 287; i <= 331; i++){
    $("#vThruZ").append(`<p class="beastName" id="${arr.results[i].name}">${arr.results[i].name}</p>`);
  }
}

function appendId(arr){
  for(let i=0; i <=99; i++){
    console.log(arr.results[i].index);
    $('p.beastName').attr('id', `${arr.results[i].index}`);
  }
}


function attachListeners(){
  $('h2.aThruE').on('click', function(){
    $("#aThruE").toggle();
    $("#fThruI, #jThruM, #nThruU, #vThruZ").hide();
  });
  $('h2.fThruI').on('click', function(){
    $("#fThruI").toggle();
    $("#aThruE, #jThruM, #nThruU, #vThruZ").hide();
  });
  $('h2.jThruM').on('click', function(){
    $('#jThruM').toggle();
    $("#fThruI, #aThruE, #nThruU, #vThruZ").hide();
  });
  $('h2.nThruU').on('click', function(){
    $('#nThruU').toggle();
    $("#fThruI, #jThruM, #aThruE, #vThruZ").hide();
  });
  $('h2.vThruZ').on('click', function(){
    $('#vThruZ').toggle();
    $("#fThruI, #jThruM, #nThruU, #aThruE").hide();
  });
  $('p.beastName').on('click', 'id', function(){
    console.log($(this).text());
  });
}

$(document).ready(function () {
  
  $("#fThruI, #jThruM, #nThruU, #aThruE, #vThruZ").hide();
  MonsterList.getMonsterList().then(function (monsterListResponse) {
    if (monsterListResponse instanceof Error) {
      throw Error("Sorry there was an error");
    }
    const monsterList = monsterListResponse;
    displayAThruZ(monsterList);
    appendId(monsterList);
  });
  attachListeners();
});
