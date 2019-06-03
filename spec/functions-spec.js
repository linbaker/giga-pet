import { Dog } from './../src/functions.js';

describe('Dog', function() {

  it('should instantiate a Dog object', function (){
    let clifford = new Dog("Clifford")
    expect(typeof clifford).toEqual(typeof new Dog);
  });
});
