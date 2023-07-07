/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
console.log("------------ Array pets iniziale ------------\n", pets);

console.log("--------------- ESERCIZIO 1 ---------------");
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

//__________________________________________________________________________________________________________

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log("--------------- ESERCIZIO 2 ---------------");

const pets_ordinati = [];

for (let i = 0; i < pets.length; i++) {
  pets_ordinati.push(pets[i]);
}

pets_ordinati.sort();
console.log(pets_ordinati);

//__________________________________________________________________________________________________________

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log("--------------- ESERCIZIO 3 ---------------");

const pets_ordine_inverso = [];

for (let i = 0; i < pets_ordinati.length; i++) {
  pets_ordine_inverso.unshift(pets_ordinati[i]);
}

console.log(pets_ordine_inverso);

//__________________________________________________________________________________________________________

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log("--------------- ESERCIZIO 4 ---------------");

const pets_primoToUltimo = [];

for (let i = 0; i < pets.length; i++) {
  pets_primoToUltimo.push(pets[i]);
}

const primo_animale = pets_primoToUltimo[0];

pets_primoToUltimo.shift();
pets_primoToUltimo.push(primo_animale);

console.log(pets_primoToUltimo);

//__________________________________________________________________________________________________________

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

//__________________________________________________________________________________________________________

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

//__________________________________________________________________________________________________________

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

//__________________________________________________________________________________________________________

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

//__________________________________________________________________________________________________________

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

console.log("--------- Array numeri iniziale ---------\n", numericArray);
console.log("--------------- ESERCIZIO 9 ---------------");

let i = 0;

while (numericArray[i] !== 32) {
  console.log(numericArray[i]);
  i++;

  //per comprendere anche il 32. Se non lo si vuole comprendere basta togliere l'if
  if (numericArray[i] === 32) {
    console.log(32);
    break;
  }
}

//__________________________________________________________________________________________________________

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

//__________________________________________________________________________________________________________
