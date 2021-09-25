function ElectricalAppliance(name, power) {
  this.name = name;
  this.power = power;
  this.isPlugged = false;
}
  
ElectricalAppliance.prototype.plugIn = function() {
  console.log("Plug in " + this.name);
  this.isPlugged = true;
}
 
ElectricalAppliance.prototype.plugOut = function() {
  console.log("Plug out " + this.name);
  this.isPlugged = false;
}

function Computer(name, power, brand, type) {
  this.name = name;
  this.power = power;
  this.brand = brand;
  this.type = type;
}

Computer.prototype = new ElectricalAppliance();

function Lamp(name, power, color) {
  this.name = name;
  this.power = power;
  this.color = color;
}

Lamp.prototype = new ElectricalAppliance();
Lamp.prototype.changeColor = function(newColor) {
  console.log("Change color for " + this.name);
  this.color = newColor;
}

computer = new Computer("my love", 1020, "HP", "gaming");
console.log(computer);
computer.plugIn();
console.log(computer);
computer.plugOut();
console.log(computer);

lamp = new Lamp("my lamp", 121, "red");
console.log(lamp);
lamp.plugIn();
console.log(lamp);
lamp.plugOut();
console.log(lamp);
lamp.changeColor("yellow");
console.log(lamp);
