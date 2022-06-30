//1 array


let numbers:number[] = [1,2,3,4]

console.log(numbers[1])

let nomes:string[]=["joão","maria","pedrin"]
console.log(nomes[2])


//tipo  ANY
// transmite ao ts que qualquer tipo satisfaz a variável
//devemoms evitar este tipo, pois vai contra os principios
//dois casos de uso : o tipo do dado realmente não importa e arrays com dados de múltiplos tipos;


const arr1:any = [1,"teste",true,[],{nome:"jonathan"}]
console.log(arr1)


// tipo de parâmetro de funções

//podemos definir o tipo de cada parâmetro de uma função
//assim condicionamos o seu uso correto;
//a sintaxe é :function minhaFuncao(nome:string){}
//agora podemos passar o parâmetro nome, apenas como texto

function NomesCompletos(nome:string){
    return nome
}

NomesCompletos("Jonathan")

//tipo de rettorno em funções

//Os retornos também podem ser definidos por nós;
//para isso utilizamos a sintaxe:function myFunction(): number{}
//estat função retorna um número
function numeros (num1:string):string {
    return "Oi"

}

//FUNCOES ANONIMAS EM TS
/*
*o Typescript consegue nos ajudar também em funções anônimas;
fazendo uma validação do código digitado, nos fornecendo dicas de possíveis problemas
exemplo: métodos não existentes
*/
setTimeout(function(){
    const sallary:number = 1000
},2000)

