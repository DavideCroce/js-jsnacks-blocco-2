console.log('JS OK');

/* 
Il softwere deve chiedere per 5 volte qll'utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in 2 versioni, con il FOR e con il WHILE.
*/

/* Ciclo FOR */

let somma = 0

for (let r = 0; r < 5; r++ ){
    const numb = parseInt(prompt('INSERISCI UN NUMERO!'));
    if (!isNaN (numb)){
        somma += numb;
    }
}

console.log (somma);
console.log (numb);

/* Ciclo WHILE */

let somma = 0;
let r = 0;

while (r < 5);{
    const numb = parseInt(prompt('INSERISCI UN NUMERO!'));
    if (!isNaN (numb)){
        somma += numb;
    }
}

r++;

