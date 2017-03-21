var barbarian = {
  name: 'Maximus',
  weapon: 'Unicorn Horn',
  health: 100,
  anger: 0,
  strength: 500,
  favBeer: 'ShitBrew',
  drinkAlcohols: 
  //function(drink){
  //    if (drink !== this.favBeer){
  //       this.anger = 1500;
  //    } else {
  //       this.health +=150;
  //    }
  //  },
  function(gulpgulp){
    if (gulpgulp == this.favBeer){
      return this.health += 150;
      return this.anger = 0;
    } else {
      this.anger += 1500;
    }
  },
  puppyPlay: function(){
    if(this.anger > 0)
      return this.anger = 0
  },
  attack: function(){
    return this.strength += 500
  }
}

module.exports = barbarian