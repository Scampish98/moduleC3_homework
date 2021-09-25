class ElectricalAppliance {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
  
  plugIn() {
    console.log("Plug in " + this.name);
    this.isPlugged = true;
  }
  
  plugOut() {
    console.log("Plug out " + this.name);
    this.isPlugged = false;
  }
}

class Computer extends ElectricalAppliance {
  constructor(name, power, brand, type) {
    super(name, power);
    this.brand = brand;
    this.type = type;
  }
}

class Lamp extends ElectricalAppliance {
  constructor(name, power, color) {
    super(name, power)
    this.color = color;
  }
  
  changeColor(newColor) {
    console.log("Change color for " + this.name);
    this.color = newColor;
  }
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
