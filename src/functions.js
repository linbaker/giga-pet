var myTimer;
var deadCheck;
import $ from 'jquery';
class Dog{
  constructor(name){
    this.name = name;
    this.happiness = 100;
    this.hunger = 100;
    this.discipline = 100;
    this.health = 100;
    this.trickReward = false;
  }

  setHealth() {
    myTimer = setInterval(() => {
      console.log(this.happiness, this.hunger, this.discipline);
      this.happiness -= 1;
      this.hunger -= 1;
      this.discipline -= 1;
      this.health = parseInt((this.happiness + this.hunger + this.discipline)/3);
    }, 30000);
  }

  hideAll(){
    $(".god").hide();
    $(".dog").hide();
  }

  defaultDog(){
    $("#wait").show();
  }

  checkLevels() {
    function clearDead(){
      clearInterval(deadCheck);
    }
    let that = this;
    deadCheck = setInterval(() => {
      //health bar
      let health = document.getElementById("health")
      health.value = this.health;
      //discipline bar
      let discipline = document.getElementById("discipline")
      discipline.value = this.discipline;
      //hunger bar
      let hunger = document.getElementById("hunger")
      hunger.value = this.hunger;
      //happiness bar
      let happiness = document.getElementById("happiness")
      happiness.value = this.happiness;


      let attributes = [this.happiness, this.hunger, this.discipline, this.health];
      attributes.forEach(function(attribute){
        if(attribute <= 0) {
          attribute = 0;
          clearInterval(myTimer);
          that.hideAll();
          $(".god").hide();
          $(".dog").hide();
          $("#dead").show();
          alert("You killed him");
          clearDead();
        }
        if(attribute >= 100) {
          attribute = 100;
        }
      });
    }, 100);
  }

  watchHunger() {
    let that = this;
    setInterval(() => {
      if(this.hunger < 50) {
        this.happiness -= 5;
        this.discipline -= 5;
        that.hideAll();
        $("#sad").show();
        alert("hungry");
      }
    }, 15000);
  }

  watchHappiness() {
    let that = this;
    setInterval(() => {
      if(this.happiness < 50) {
        this.discipline -= 5;
        that.hideAll();
        $("#sad").show();
        alert("extra sad");
      }
      if(this.happiness > 90) {
        that.hideAll();
        $("#happy").show();
        alert("extra happy");
      }
    }, 15000);
  }

  feed(){
    this.hunger += 10;
    this.hideAll();
    $("#food").show();
    if (this.hunger >= 100) {
      this.hunger = 100;
      this.happiness -= 5;
    }
    setTimeout(function(){
      $("#food").hide();
      $("#poop").show();
    }, 3000);
  }

  scoop(){
    this.happiness ++;
    this.hideAll();
    $("#wait").show();
  }

  treat(){
    this.hunger += 5;
    this.happiness += 5;
    this.hideAll();
    $("#treat").show();
    if (this.trickReward === true) {
      this.discipline += 15;
      this.trickReward = false;
    }
    if (this.hunger >= 100) {
      this.hunger = 100;
      this.happiness -= 2;
    }
    if (this.happiness >= 100) {
      this.happiness = 100;
      this.discipline--;
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  trick(){
    this.hideAll();
    let num = -1;
    console.log(this.discipline);
    if (this.discipline < 50) {
      num = this.getRandomInt(8);
    } else {
      num =  this.getRandomInt(4);
    }
    console.log(num);
    if (num === 1 || num === 2 || num === 3) {
      this.discipline += 10;
      $("#tricked").show();
    } else {
      this.discipline -= 5;
      $("#not_trick").show();
    }
    this.discipline -= 3;
    this.trickReward = true;
    setTimeout(function(){
      this.trickReward = false;
    }, 10000);
  }

  plays() {
    if (this.hunger > 50) {
      this.happiness += 5;
      this.hunger -= 10;
      this.hideAll();
      $("#played").show();
    }
  }

  bathe(){
    this.hideAll();
    $("#bathe").show();
    this.happiness--;
    this.discipline++;
  }

  pet(){
    this.hideAll();
    $("#treat").show();
    this.happiness += 5;

  }

  punish() {
    this.hideAll();
    $("#sad").show();
    this.happiness -= 5;
    this.discipline -= 2;
  }

}

module.exports = {
  Dog: Dog
};
