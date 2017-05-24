function Bird() {
  this.covering = feathers;
}

Owl.prototype = Object.create(Bird.prototype);

Bird.prototype.transport = function() {
  return ['fly', 'swim', 'walk'];
}

snowy = new Owl();

console.log(snowy.transport())