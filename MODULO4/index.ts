//type guard

function sum(a:number | string, b:number| string){
    if(typeof a === "string" && typeof b === "string"){
        console.log(parseFloat(a) + parseFloat(b))
    }else if (typeof a=== "number" && typeof b === "number") {
        console.log(a + b)
    }else {
        console.log("impossivel realizar a soma!.")
    }
}

sum("4", "59")
sum(12,45.5)
sum("4",5)


// checando se valor existe

//em Javascript podemos colocar uma variável em um if e se houver, algum valor reccebemos um true;
//quando não há valor um false;
// desta maneira conseguimos realizar o narrowing também, é uma outra estratégia bem utilizada;

//vamos ver na prática

function operations(arr: number[], operation?:string | undefined){
    if(operation){
        if (operation === "sum" ){
            const sum = arr.reduce((i,total)=> i + total)
            console.log(sum)

        }else if(operation === "multiply") {
            const multiply = arr.reduce((i, total) => i  *  total)
            console.log(multiply)
        }
    }else {
        console.log("por favor defina uma operação")
    }
}

operations([1,2,3])
operations([1,2,3], "multiply")

//Operador instanceof

//para além dos tipos primitivos,podemos trabalhar com instanceof

// checando se um dado pertence a uma determinada classe.
//E ele vai servir até para as nossas próprias classes;

//instance of

class User {
    name

    constructor(name:string) {
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name:string) {
        super(name)
    }
}
const jhon = new User("Jhon")
const pou = new SuperUser ( " Pou ")

console.log(jhon)
console.log(pou)

function userGreeting(user: object) {
    if(user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`)
    }else if (user instanceof User) {
        console.log(`Olá  ${user.name}`)
    }
}
userGreeting(jhon)
userGreeting(pou)

// Operador in 

// o operador in é utilizado para checar se existe uma propriedade no objeto;
//Outro recurso interessante para o narrowing
//Pois propriedades também podem ser opcionais



class Dog { 
    name
    breed

    constructor(name:string, breed?:string) {
        this.name = name
        if(breed) {
            this.breed = breed
        }
    }
}

const turca = new Dog("Turca")
const bob = new Dog("Bob", "Pastor Alemão")

function showDogDetails(dog:Dog){
    if('breed' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`)
    }else {
        console.log("O cachorro é um SRD")
    }
}

showDogDetails(turca)
showDogDetails(bob)



//exercicios
function RecebeDados (dados:string | boolean){
    if(dados){
        if(dados == "1"){
            console.log(`Sua nota foi ${dados} tente melhorar`)
        }else if (dados =="2") {
            console.log(`Sua nota foi ${dados} tente melhorar um pouco mais`)
        }else if (dados == "3"){
            console.log(`Sua nota foi ${dados} e foi média` )
        }else if (dados == "4") {
            console.log(`Sua nota foi ${dados} Parabéns` )
        }else if (dados == "5") {
            console.log(`Muito bem sua nota foi ${dados} Excelente!!!`)
        }
    }else {
        console.log("O usuario não inseriu seu review")
    }

}
RecebeDados("5")
RecebeDados("4")
RecebeDados("3")
RecebeDados("2")
RecebeDados("1")
RecebeDados(false)
