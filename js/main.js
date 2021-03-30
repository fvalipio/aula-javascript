function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"))

    //alert("Obrigado por clicar");
}

function redirecionar() {
    window.open("https://www.linkedin.com/in/francilaine-viana/");
    //window.location.href = "https://www.linkedin.com/in/francilaine-viana/";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada")
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}

/*
function soma(n1, n2) {
    return n1 + n2;
}
alert(soma(5, 10));
*/

/*
var validar = 0;
function validaIdade(idade) {
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt ("Qual sua idade?");
validaIdade(idade)
console.log(validar);
*/


/*
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count = count + 1; //tambem pode usar count ++
}*/

/*
var idade = prompt("Qual sua idade?")
//var idade = 18;
if (idade >= 18){
    alert("maior de idade");
}else {
    alert("menor de idade");
};
*/


/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]; //transformando em lista
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maçã", "pêra", "laranja"];
//console.log(lista)
//console.log(lista[1]); //exibe item 1
//lista.push("uva"); //incluir item na lista
//lista.pop(); //remover item da lista
//console.log(lista.length); //quantidade de itens na lista
//console.log(lista.reverse()); //altera ordem dos itens na lista
//console.log(lista.toString()); //transforma em string
//console.log(lista.toString()[0]) //exibe primeira letra item 0
//console.log(lista.join(" - ")); //caractere de junção dos itens da lista


//var nome = "Francilaine";
//var idade = 34;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));