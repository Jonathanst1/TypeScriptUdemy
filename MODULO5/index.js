"use strict";
//FUNÇÕES
//1 VOID
function withoutReturn() {
    console.log("Essa função não tem retorno");
}
withoutReturn();
//callback como argumento
//podemos inserir uma função de callback como argumento de uma função
//Nela conseguimos definir o tipo de argumento aceito pela callback
//e também o tipo de retorno da mesma;
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Jonathan");
preGreeting(greeting, "Frazão");
//Generic Fuinctions
//É uma estratégia para quando o tipo de retorno é relacionado ao tipo de argumento;
//por exemplo: um item de um array poded ser string,boolean ou number
//normalmente são utilizadas letras como T ou U para de firnir os generics, é uma convenção
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObjects({ name: "Jonathan" }, { age: 27, job: "Programer" });
console.log(newObject);
