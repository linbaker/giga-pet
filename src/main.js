import { Dog } from './functions.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import wait from './img/wait.gif';
import food from './img/food.gif';
import pooped from './img/poop.gif';
import treated from './img/treat.gif';
import dead from './img/dead.gif';
import sad from './img/sad.gif';
import bathed from './img/bathe.gif';
import not_trick from './img/not_trick.gif';
import played from './img/play.gif';
import tricked from './img/trick.gif';
import happy from './img/happy.gif';
import feed from './img/icons/i_feed.png';
import bathe from './img/icons/i_bathe.png';
import play from './img/icons/i_play.png';
import poop from './img/icons/i_poop.png';
import pet from './img/icons/i_pet.png';
import trick from './img/icons/i_trick.png';
import treat from './img/icons/i_treat.png';
import punish from './img/icons/i_punish.png';

var i_feed = document.getElementById('i_feed');
i_feed.src = feed;
var i_bathe = document.getElementById('i_bathe');
i_bathe.src = bathe;
var i_play = document.getElementById('i_play');
i_play.src = play;
var i_poop = document.getElementById('i_poop');
i_poop.src = poop;
var i_pet = document.getElementById('i_pet');
i_pet.src = pet;
var i_trick = document.getElementById('i_trick');
i_trick.src = trick;
var i_treat = document.getElementById('i_treat');
i_treat.src = treat;
var i_punish = document.getElementById('i_punish');
i_punish.src = punish;

var wait_gif = document.getElementById('wait');
wait_gif.src = wait;
var food_gif = document.getElementById('food');
food_gif.src = food;
var poop_gif = document.getElementById('poop');
poop_gif.src = pooped;
var treated_gif = document.getElementById('treat');
treated_gif.src = treated;
var dead_gif = document.getElementById('dead');
dead_gif.src = dead;
var sad_gif = document.getElementById('sad');
sad_gif.src = sad;
var bathed_gif = document.getElementById('bathe');
bathed_gif.src = bathed;
var play_gif = document.getElementById('played');
play_gif.src = played;
var tricked_gif = document.getElementById('tricked');
tricked_gif.src = tricked;
var not_tricked_gif = document.getElementById('not_trick');
not_tricked_gif.src = not_trick;
var happy_gif = document.getElementById('happy');
happy_gif.src = happy;


$(document).ready(function(){
  $("#i_feed").click(function() {
    dog.feed();
  })
  $("#i_poop").click(function() {
    dog.scoop();
  })
  $("#i_punish").click(function() {
    dog.punish();
  })
  $("#i_treat").click(function() {
    dog.treat();
  })
  $("#i_trick").click(function() {
    dog.trick();
  })
  $("#i_pet").click(function() {
    dog.pet();
  })
  $("#i_play").click(function() {
    dog.plays();
  })
  $("#i_bathe").click(function() {
    dog.bathe();
  })
});

let dog = new Dog("fido");
dog.setHealth();
dog.checkLevels();
dog.watchHunger();
dog.watchHappiness();
