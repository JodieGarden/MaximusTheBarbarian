var assert = require('assert');
var barbarian = require('../barbarian');

describe('Barbarian', function(){
  it('should drink favbeer and be so happy', function(){
    barbarian.drinkAlcohols("ShitBrew");
    assert.equal(250, barbarian.health);
  })
  it('should drink other beer and feel rage', function(){
    barbarian.drinkAlcohols("coke");
    assert.equal(1500, barbarian.anger);
  })
  it('to calm down maximus pets puppies', function(){
    barbarian.puppyPlay();
    assert.equal(0, barbarian.anger);
  })
  it('maximus attacks you with his unicorn horn cause you gave him the wrong beer', function(){
    barbarian.attack();
    assert.equal(1000, barbarian.strength);
  })
})