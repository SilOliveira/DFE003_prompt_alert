//Elabore um programa que leia um numero e devolva para o usuário o dobro do número informado.

let numero = prompt("Quer saber qual o dobro de um numero?Digite aqui:");
let dobro = numero * 2;   

alert("O dobro do número informado é: " + dobro);



//Elabore um programa que calcule o valor do jantar, sendo o valor total do jantar composto pela conta junto com a taxa de atendimento do garçom. 

let valorDaConta = parseFloat(prompt("Digite o valor da conta do jantar:"));

let taxaDeAtendimento = parseFloat(prompt("Digite a taxa de atendimento do garçom (%):"));

let valorDaTaxa = valorDaConta * (taxaDeAtendimento / 100);

let valorTotalJantar = valorDaConta + valorDaTaxa;

alert("O valor total do jantar é: R$ " + valorTotalJantar.toFixed(2));


//Elabore um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente. 

let valorTotal = prompt("Qual é o valor total da conta?");
let quantidadeClientes = prompt("Quantos clientes vão pagar a conta?");

valorTotal = parseFloat(valorTotal);
quantidadeClientes = parseInt(quantidadeClientes);

let valorPorCliente = valorTotal / quantidadeClientes;

alert("Cada cliente deve pagar R$" + valorPorCliente.toFixed(2));
