"use strict";
//1 array
let numbers = [1, 2, 3, 4];
console.log(numbers[1]);
let nomes = ["joão", "maria", "pedrin"];
console.log(nomes[2]);
//tipo  ANY
// transmite ao ts que qualquer tipo satisfaz a variável
//devemoms evitar este tipo, pois vai contra os principios
//dois casos de uso : o tipo do dado realmente não importa e arrays com dados de múltiplos tipos;
const arr1 = [1, "teste", true, [], { nome: "jonathan" }];
console.log(arr1);
// tipo de parâmetro de funções
//podemos definir o tipo de cada parâmetro de uma função
//assim condicionamos o seu uso correto;
//a sintaxe é :function minhaFuncao(nome:string){}
//agora podemos passar o parâmetro nome, apenas como texto
function NomesCompletos(nome) {
    return nome;
}
NomesCompletos("Jonathan");
//tipo de rettorno em funções
//Os retornos também podem ser definidos por nós;
//para isso utilizamos a sintaxe:function myFunction(): number{}
//estat função retorna um número
function numeros(num1) {
    return "Oi";
}
//FUNCOES ANONIMAS EM TS
/*
*o Typescript consegue nos ajudar também em funções anônimas;
fazendo uma validação do código digitado, nos fornecendo dicas de possíveis problemas
exemplo: métodos não existentes
*/
setTimeout(function () {
    const sallary = 1000;
}, 2000);
//tipos de objetos
/*

* Podemos determinar tipos para objetos também
* A sintaxe é {prop:tipo, prop2:tipo2}
* Ou seja, estamos determinando quais tipos as propriedades de um objeto possuem
*/
function cordinates(coord) {
    console.log("X corddinattes: " + coord.x);
    console.log("y coordinates:" + coord.y);
}
const objCoord = { x: 200, y: 85.2 };
cordinates(objCoord);
/*
Propriedades opcionais

Nem sempre os objetos possuem todas as propriedades que poderiam possuir
por isso temos as propriedades opcionais
para ter esse resultado dedvemos colocar uma interrogação:{nome:string,sobrenome?:string}


// props opcionais

*/
function showNumbers(a, b, c) {
    console.log("A" + a);
    console.log("B" + b);
    if (c) {
        console.log("C" + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
//Maneira correta de validar props opcionais
//quando a pripriedade é opcional, precisamos criar uma validação
//isso acontece por que o typescript não nos ajuda mais, kjá que ele deixa de controlar o valor que recebemos.
//para isso utilizamoms uma condicional if, e conseguimos resolver a situação
function advancedGreeting(firstName, lastname) {
    if (lastname !== undefined) {
        return `Olá ,${firstName} ${lastname}, tudo bem?`;
    }
    return `Olá, ${firstName},tudo bem ?`;
}
console.log(advancedGreeting("Jonathan", "Frazão"));
console.log(advancedGreeting("Jonathan"));
