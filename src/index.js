import $ from "jquery";
import "turn.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import MonsterService from './monster.js';
import MonsterList from "./monster-list.js";

function displayAThruZ(arr) {
  for (let i = 0; i <= 99; i++) {
    $("#aThruE").append(`<p class="beastName" id="${arr.results[i].index}">${arr.results[i].name}</p>`);
  }
  for (let i = 100; i <= 175; i++) {
    $("#fThruI").append(`<p class="beastName" id="${arr.results[i].index}">${arr.results[i].name}</p>`);
  }
  for (let i = 176; i <= 202; i++) {
    $("#jThruM").append(`<p class="beastName" id="${arr.results[i].index}">${arr.results[i].name}</p>`);
  }
  for (let i = 203; i <= 286; i++) {
    $("#nThruU").append(`<p class="beastName" id="${arr.results[i].index}">${arr.results[i].name}</p>`);
  }
  for (let i = 287; i <= 331; i++) {
    $("#vThruZ").append(`<p class="beastName" id="${arr.results[i].index}">${arr.results[i].name}</p>`);
  }
}

function displayMonsterInfo(title, size, type, alignment, xp, languages, strength, dexterity, constitution, intelligence, wisdom, charisma) {
  $('#monsterOutput').show();
  $("#flipbook").hide();
  $("#monsterOutput").html(`<h4>Name: ${title}</h4> <p>Size: ${size}</p> <p>Type: ${type}</p> <p>Alignment: ${alignment}</p> <p>XP: ${xp}</p> <p>Languages: ${languages}</p> <p>Strength: ${strength}</p> <p>Dexterity: ${dexterity}</p> <p>Constitution: ${constitution}</p> <p>Intelligence: ${intelligence}</p> <p>Wisdom: ${wisdom}</p> <p>Charisma: ${charisma}</p>
  <button type="button" id="back">Back</button>
  `);
  $("#back").on('click', function(){
    $("#flipbook").show();
    $("#monsterOutput").hide();
    $("#fThruI, #jThruM, #nThruU, #aThruE, #vThruZ").hide();
  });
}

// function clearOutput() {
//   $("#monsterOutput").text("");
// }

function attachListeners() {
  $('h2.aThruE').on('click', function () {
    $("#aThruE").toggle();
    $("#fThruI, #jThruM, #nThruU, #vThruZ").hide();
  });
  $('h2.fThruI').on('click', function () {
    $("#fThruI").toggle();
    $("#aThruE, #jThruM, #nThruU, #vThruZ").hide();
  });
  $('h2.jThruM').on('click', function () {
    $('#jThruM').toggle();
    $("#fThruI, #aThruE, #nThruU, #vThruZ").hide();
  });
  $('h2.nThruU').on('click', function () {
    $('#nThruU').toggle();
    $("#fThruI, #jThruM, #aThruE, #vThruZ").hide();
  });
  $('h2.vThruZ').on('click', function () {
    $('#vThruZ').toggle();
    $("#fThruI, #jThruM, #nThruU, #aThruE").hide();
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
  });
  attachListeners();
  $('.aThruE, .fThruI, .jThruM, .nThruU, .vThruZ').on('click', 'p.beastName', function () {
    let monsterName = $(this).attr('id');
    MonsterService.getMonster(monsterName)
      .then(function (monsterResponse) {
        if (monsterResponse instanceof Error) {
          throw Error("Sorry there was an error");
        }
        // let monsterImage = monsterResponse.index;
        let monsterTitle = monsterResponse.name;
        let monsterSize = monsterResponse.size;
        let monsterType = monsterResponse.type;
        let monsterAlignment = monsterResponse.alignment;
        let monsterXP = monsterResponse.xp;
        let monsterLanguages = monsterResponse.languages;
        let monsterStrength = monsterResponse.strength;
        let monsterDexterity = monsterResponse.dexterity;
        let monsterConstitution = monsterResponse.constitution;
        let monsterIntelligence = monsterResponse.intelligence;
        let monsterWisdom = monsterResponse.wisdom;
        let monsterCharisma = monsterResponse.charisma;
        displayMonsterInfo(monsterTitle, monsterSize, monsterType, monsterAlignment, monsterXP, monsterLanguages, monsterStrength, monsterDexterity, monsterConstitution, monsterIntelligence, monsterWisdom, monsterCharisma);
      });
    // clearOutput();
  });
});




// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//   return images;
// }

// const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

// <img src={images['doggy.png']} />