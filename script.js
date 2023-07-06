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


let runCounter = false;
let intervalRef = null
let count = 0;
let centaine = new Number("centaine");
let dizaine = new Number("dizaine");
let unite = new Number("unite");

const start = () => {

  const button = document.getElementById("startButton")
  button.onclick = stop;
  button.innerText = "Stop";

  intervalRef = setInterval(() => {
    count = (count + 1) % 1000;

    const [newCentaine, newDizaine, newUnite] = parseCount(count);
    
    newUnite !== unite.value && unite.rotate();
    newDizaine !== dizaine.value && dizaine.rotate();
    newCentaine !== centaine.value && centaine.rotate();
  }, 1000)
}

const stop = () => {
  clearInterval(intervalRef);
  const button = document.getElementById("startButton")
  button.onclick = start;
  button.innerText = "Démarrer/Reprendre";
}

const parseCount = (count) => {
  const parsingCount = count.toString().padStart(3, "0").split("").map((el) => parseInt(el));
  return parsingCount;
}