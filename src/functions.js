var myTimer;
var deadCheck;
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
      console.log("happy", this.happiness);
      console.log("hunger", this.hunger);
      console.log("discipline", this.discipline);
      console.log("health", this.health);
      this.happiness -= 1;
      this.hunger -= 1;
      this.discipline -= 1;
      this.health = parseInt((this.happiness + this.hunger + this.discipline)/3);
    }, 100);
  }

  checkLevels() {
    function clearDead(){
      clearInterval(deadCheck);
    }
    deadCheck = setInterval(() => {
      console.log("This works");
      let attributes = [this.happiness, this.hunger, this.discipline, this.health];
      attributes.forEach(function(attribute){
        console.log("pet this dog");
        if(attribute <= 0) {
          console.log("dead");
          attribute = 0;
          clearInterval(myTimer);
          clearDead();
        }
        if(attribute >= 100) {
          attribute = 100;
        }
      });
    }, 100);
  }

  watchHunger() {
    setInterval(() => {
      if(this.hunger < 50) {
        this.happiness -= 5;
        this.discipline -= 5;
      }
    }, 45000);
  }

  watchHappiness() {
    setInterval(() => {
      if(this.happiness < 50) {
        this.discipline -= 5;
      }
    }, 45000);
  }

  feed(){
    this.hunger += 10;
    if (this.hunger >= 100) {
      this.hunger = 100;
      this.happiness -= 5;
    }
  }

  treat(){
    this.hunger += 5;
    this.happiness += 5;
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
    let num = -1;
    if (this.discipline < 50) {
      num = this.getRandomInt(4);
    } else {
      num =  this.getRandomInt(2);
    }
    if (num === 1) {
      this.discipline++;
    } else {
      this.discipline--;
    }
    this.discipline--;
    this.trickReward = true;
    setTimeout(function(){
      this.trickReward = false;
    }, 10000);
  }

  play() {
    if (this.hunger > 50) {
      this.happiness += 10;
      this.hunger -= 2;
    }
  }

  bathe(){
    this.happiness--;
    this.discipline++;
  }
}

module.exports = {
  Dog: Dog
}
