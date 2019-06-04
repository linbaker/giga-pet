import { Dog } from './functions.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import dogImage from './img/food.gif';

var dogImg = document.getElementById('pug');
dogImg.src = dogImage;

$(document).ready(function(){
  console.log("test");
});

let dog = new Dog("fido");
dog.setHealth();
dog.checkLevels();
