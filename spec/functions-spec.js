import { Dog } from './../src/functions.js';

describe('Dog', function() {
  let clifford = new Dog("Clifford");

  beforeEach(function() {
    jasmine.clock().install();
    clifford.setHealth();
  });


  it('should instantiate a Dog object', function (){
    let clifford = new Dog("Clifford")
    expect(typeof clifford).toEqual(typeof new Dog);
  });

  it('should have a health level of 98 after 60001 milliseconds', function() {
    jasmine.clock().tick(60001);

    expect(clifford.health).toEqual(98);
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });
  // it('should have a name and a health level of 300', function() {
  //   expect(fuzzy.name).toEqual("Fuzzy");
  //   expect(fuzzy.foodLevel).toEqual(10);
  // });

});
