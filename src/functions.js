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

  feed(){
    this.hunger++;
    if (this.hunger >= 100) {
      this.hunger = 100;
      this.happiness - 5;
    }
  }

  treat(){
    this.hunger++;
    this.happiness++;
    if (trickReward === true) {
      this.discipline ++;
      let trickReward = false;
    }
    if (this.hunger >= 100) {
      this.hunger = 100;
      this.happiness - 2;
    }
    if (this.happiness >=100) {
      this.happiness = 100;
      this.disclipine--;
    }
  }

  trick(){
    this.disclipine++;
    this.happiness++;
    this.hunger++;

    this.happiness--;
    this.disclipine--;
  }

  doTrick(){
    let num =  getRandomInt(2);
    if (num = 1){
      this.disclipine++;
    } else {
      this.disclipine--;
    }
    this.disclipine--;
    this.trickReward = true;
    setTimeout(function(){
        this.trickReward = false;
    }, 10000)
  }

  trickTreat() {
    let trickReward = false;
    return trickReward;
  }

  play() {
    this.happiness++;
    this.hunger--;
  }

  bathe(){
    this.happiness--;
    this.disclipine++;
    }

}



}
