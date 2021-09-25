function printOwnProperties(obj) {
  for (let property in obj) {
    if (obj.hasOwnProperty(property)) {
      console.log(property, obj[property]);
    }
  }
}
