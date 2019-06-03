class Dog{
  constructor(name){
    this.name = name;
    this.happiness = 100;
    this.hunger = 100;
    this.disclipine = 100;
    this.health = happiness + hunger + disclipine;
    this.trickReward = false;
  }

  setHealth() {
    setInterval(() => {
      this.happiness--;
      this.hunger--;
      this.disclipine--;
    }, 30000);
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
      this.disclipine--;
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  trick(){
    let num = -1;
    if (this.discipline < 50) {
      let num = this.getRandomInt(4);
    } else {
      let num =  this.getRandomInt(2);
    }
    if (num === 1) {
      this.disclipine++;
    } else {
      this.disclipine--;
    }
    this.disclipine--;
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
    this.disclipine++;
  }

}
