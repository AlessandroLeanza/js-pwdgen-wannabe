// let nome = 'Pippo'; // string
// const age = 33; // number
// let colore = prompt(); // string | null
let nome = prompt("Inserisci il tuo nome"); // string | null
console.log(nome);
let cognome = prompt("Inserisci il tuo cognome"); // string | null
console.log(cognome);
let colorePreferito = prompt("Inserisci il tuo colore preferito"); // string | null
console.log(colorePreferito);
let numeroRandom = Math.round(Math.random() * 100); // number
console.log(numeroRandom)
const password = nome + cognome + colorePreferito + numeroRandom; //string
console.log("La tua password è:" + password);

