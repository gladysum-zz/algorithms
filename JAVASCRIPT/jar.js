function Jar() {
  this.content = {};
}

Jar.prototype.add = function(amount, type) {
  if (this.content[type]) this.content[type] += amount
  else this.content[type] = amount;
};

Jar.prototype.pourOut = function(amount) {
  let concentrations = {};
  for (let key in this.content) {
    concentrations[key] = jar.getConcentration(key);
  }
  for (let key in this.content) {
    this.content[key] -= concentrations[key] * amount;
  }
};

Jar.prototype.getTotalAmount = function() {
  return Object.keys(this.content).map(key=>this.content[key]).reduce((a,v)=>a+v, 0);
};

Jar.prototype.getConcentration = function(type) {
  if (this.getTotalAmount() === 0) return 0;
  return this.content[type]/this.getTotalAmount();
}

let jar = new Jar();

jar.add(200, 'apple');

jar.add(400, 'pear');

jar.pourOut(200);

console.log(jar.getTotalAmount());
console.log(jar.content)