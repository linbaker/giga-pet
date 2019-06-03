import { Dog } from './functions.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  console.log("test");
  });

let dog = new Dog("fido");
dog.setHealth();
