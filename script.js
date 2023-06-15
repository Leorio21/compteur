const start = () => {
  let count = 0;
  let centaine = new Number("centaine");
  let dizaine = new Number("dizaine");
  let unite = new Number("unite");

  
  setInterval(() => {
    count = (count + 1) % 1000;

    const [newCentaine, newDizaine, newUnite] = parseCount(count);
    
    newUnite != unite.value && unite.rotate();
    newDizaine != dizaine.value && dizaine.rotate();
    newCentaine != centaine.value && centaine.rotate();

}, 1000)

}

const parseCount = (count) => {
  const parsingCount = count.toString().padStart(3, "0").split("");
  return parsingCount;
}


class Number {
  constructor(name) {
    this.name = name;
    this.value = 0;
  }

  rotate() {
      this.value = (this.value + 1) % 10;
      const divSup = document.getElementById(`animated__frame__${this.name}`);
      divSup.classList.add("rotation");
      setTimeout(() => {
        document.getElementById(`${this.name}CurrentSup`).textContent = this.value;
        document.getElementById(`${this.name}CurrentInf`).textContent = this.value;
      }, 800)
      setTimeout(() => {
        divSup.classList.remove("rotation");
        document.getElementById(`${this.name}NextSup`).textContent = (this.value + 1) % 10;
        document.getElementById(`${this.name}NextInf`).textContent = (this.value + 1) % 10;
      }, 900);
  }
}






// const fct = () => {
//   let prev = 0
//   let next = 1
//   setInterval(() => {
//     const divSup = document.getElementById("animated__frame");
//     divSup.classList.add("rotation");
//     setTimeout(() => {
//       prev = next % 10;
//       document.getElementById("prev1").textContent = prev;
//       document.getElementById("prev2").textContent = prev;
//     }, 800)
//     setTimeout(() => {
//       next = (next + 1) % 10;
//       divSup.classList.remove("rotation");
//       document.getElementById("next1").textContent = next;
//       document.getElementById("next2").textContent = next;
//     }, 900);
//   }, 1000)
// }