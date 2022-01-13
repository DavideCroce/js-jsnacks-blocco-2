console.log ('JS OK');

/*
Generatore di "nomi cognomi" casuali: prendendo una lista di nomi 
e una lista di cognomi,
Gatsby vuole generare una falsa lista di 3 inviati.
*/

const fake = [];
const FirstN = ['Luigi' , 'Matteo' , 'Roberto' , 'Davide' ];
const LastN = ['Rossi' , 'Bianchi' , 'Verdi' , 'Inzaghi'];

while (fake.length < 3){
    const rnd1 = Math.floor(Math.random() * FirstN.length);
    const rnd2 = Math.floor(Math.random() * LastN.length);

    const nome = FirstN[rnd1];
    const last = LastN[rnd2];

    const fakeP =  ` ${nome} ${last} `;

    if(!fake.includes (fakeP)){
        fake.push (fakeP);
    }
}

console.log (fake);