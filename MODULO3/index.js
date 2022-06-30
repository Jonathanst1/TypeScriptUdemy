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
//union types
// O union type é uma alternativa melhor do que any
//podemos determinar dois tipos para um dado
//a sintaxe: number | string
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(500);
showBalance("Jonathan");
// AVANÇANDO COM UNION TYPES
//Podemos utilizar condicionais para validação do tipo de union types
//com isso é possivel trilhar rumos diferentes,baseado no tipo de dado
//para checar o tipo utilizamos typeof
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuario não aprovado!";
    }
    return ` A função do usuário é ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showID(id) {
    console.log(`O ID  é : ${id}`);
}
showID(1);
showID("200");
showID(123);
function showCoords(obj) {
    console.log(`x: ${obj.x} y ${obj.y} z: ${obj.z}`);
}
const coordOBJ = {
    x: 10,
    y: 6,
    z: 6
};
showCoords(coordOBJ);
// literal types
//literal types é um recurso que permite colocar valores como tipos
//isso restringe o uso a não só tipos, como também os próprios valores
//este recurso é muito utilizado com union types
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("left");
//non - null assertion operator
//as vezes o typescript pode evidenciar um erro, baseando em um valor que no momento
//do codigo ainda não está disponivel
// porém se sabemos que este valor será preenchido, podemos evitar o erro
//utilizando o caractera "!""
const p = document.getElementById("some-p");
console.log(p.innerText);
let n;
n = 1000n;
console.log(n);
//symbol
//de forma resumida , o symbol cria uma referencia unica para um valor
//ou seja mesmom que ele possua o mesmo valor de outra variável teremos valores
//sendo considerados ddiferentes
let symbolA = Symbol("A");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
