// var nome = "Wesley";
// var n1 = 5;
// var n2 = 3;
// var frase = "Japão é o melhor time do mundo!";

// // alert(nome + " tem " + idade + " anos.");

// // alert(idade + idade2);

// console.log(nome);
// console.log(n1 * n2);
// console.log(frase.replace("Japão", "Brasil"));
// // alert(frase.replace("Japão", "Brasil"));
// console.log(frase.toUpperCase());


// var lista = ["maça", "pera", "laranja"];
// console.log(lista);
//lista.push("uva"); // adiciona elemento 
//lista.pop("uva"); // remove o último elemento
//console.log(lista.length); // calcula total de elementos
//console.log(lista.reverse()); // exibe ordem inversa
// console.log(lista.toString());
// console.log(lista.join(" || ")); // insere caracteres entre as strings


// var fruta = {nome:"maça", cor:"vermelha"}
// console.log(fruta.nome);
// alert(fruta.cor);

// var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
// console.log(frutas);
// alert(frutas[1].nome);

// var idade = prompt("Qual sua idade? ");
// if(idade >= 18){
//     alert("maior de idade");
// }else{
//     alert("menor de idade");
// };

//================ WHILE
// var count = 0;
// while(count< 5){
//     console.log(count);
//     alert(count);
//     count++;
// }
//================

//================
// var count;
// for(count = 0; count <= 5; count++){
//     alert(count);
// }
//================

// var d = new Date();
// alert(d.getMonth()+1);
// alert(d.getHours());
// alert(d.getMinutes());

// function soma(n1, n2){
//     return n1 + n2;
// }

// alert(soma(5,10));



// function validaIdade(idade){
//     var validar;
//     if (idade >= 18){
//         validar = true
//     }else{
//         validar = false
//     }
//     return validar;
// }
// var idade = prompt("Qual sua idade? : ");
// console.log(validaIdade(idade));

function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    // alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://google.com.br");
    //window.location.href = "https://google.com.br"; // abre na mesma aba
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui.";
}