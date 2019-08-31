
var leitorDeCSV = new FileReader();
var leitorDeCSV2 = new FileReader();


var totalArquivoTipo1 = 0;
var totalArquivoTipo2 = 0;

window.onload = function init() {
	leitorDeCSV.onload = leCSV;
	leitorDeCSV2.onload = leCSV2;

}
let f1 
let f2 

function pegaCSV(inputFile) {
	var file = inputFile.files[0];
	
	leitorDeCSV.readAsText(file);

     f1 = file.name
}

function pegaCSV2(inputFile) {
	
	var file = inputFile.files[0];
	leitorDeCSV2.readAsText(file);

	f2 = file.name
}

let totalC1 = []
let acm1 = 0
let aux1 = []

function leCSV(evt) {

	var fileArr = evt.target.result.split('\n');
	var strDiv = '<table>';
	console.log('S',fileArr.length)

	for ( var i = 0; i < fileArr.length; i++) {
		strDiv += '<tr>';
		var fileLine = fileArr[i].split(';');
		for ( var j = 0; j < fileLine.length; j++) {
			if(f1 == 'contas1.csv'){
			
			if (j%3 ==1){
				totalC1.push(fileLine[j])
			}
			}else{
				
			if (j % 2 == 0){
				
				totalC1.push(fileLine[j])
			}	

			}
			strDiv += '<td>' + fileLine[j].trim() + '</td>';
		}
		strDiv += '</tr>';
	}
	if (f1 == 'contas1.csv'){
	
	totalC1.shift(0)	
	}	

	for ( var i = 0; i < totalC1.length; i++) {
		if (f1 == 'contas1.csv'){
		aux1.push(parseInt(totalC1[i]))
		console.log(aux1)
		}else if (f1 == 'contas2.csv') {
			for ( var i = 0; i < totalC1.length; i++) {

				if(i%2 == 1 && i>1){
					
					aux1.push(parseInt(totalC1[i]))
					
					
				}
				
			}
			
		}
	}
	
	for(var i = 0; i < aux1.length; i++){
		acm1 += aux1[i]
	}

	totalArquivoTipo1 = acm1
	// Imprime total 2
	strDiv += '<tr>';
	strDiv += '<td>Total</td>';
	strDiv += '<td>' + totalArquivoTipo1 + '</td>';
	strDiv += '</tr>';

	strDiv += '</table>';

	var CSVsaida = document.getElementById('CSVsaida');
	CSVsaida.innerHTML = strDiv;
}
var total = [] 
var t = 0

let acm = 0
let aux = []

function leCSV2(evt) {
	var fileArr = evt.target.result.split('\n');
	var strDiv = '<table>';
	console.log('S',fileArr.length)

	for ( var i = 0; i < fileArr.length; i++) {
		strDiv += '<tr>';
		var fileLine = fileArr[i].split(';');
		for ( var j = 0; j < fileLine.length; j++) {
			if(f2 == 'contas1.csv'){
			
			if (j%3 ==1){
				total.push(fileLine[j])
			}
			}else{
				
			if (j % 2 == 0){
				
				total.push(fileLine[j])
			}	

			}
			strDiv += '<td>' + fileLine[j].trim() + '</td>';
		}
		strDiv += '</tr>';
	}
	if (f2 == 'contas1.csv'){
	
	total.shift(0)	
	}	

	for ( var i = 0; i < total.length; i++) {
		if (f2 == 'contas1.csv'){
		aux.push(parseInt(total[i]))
		console.log(aux)
		}else if (f2 == 'contas2.csv') {
			for ( var i = 0; i < total.length; i++) {

				if(i%2 == 1 && i>1){
					
					aux.push(parseInt(total[i]))
					
					
				}
				
			}
			
		}
	}
	
	for(var i = 0; i < aux.length; i++){
		acm += aux[i]
	}

	/*
	var fileArr = evt.target.result.split('\n');
	var strDiv = '<table>';
	
	

	for ( var i = 0; i < fileArr.length; i++) {
		strDiv += '<tr>';
		var fileLine = fileArr[i].split(';');
		for ( var j = 0; j < fileLine.length; j++) {
			
			if(f2 == "contas1.csv"){
				
				if (j%3 ==1){
					total.push(fileLine[j])
				}

			}else{
				if (j % 2 == 0){
					
						total.push(fileLine[j])
				}	
			}
		
			strDiv += '<td>' + fileLine[j].trim() + '</td>';

				
			
		}
		strDiv += '</tr>';
	}
	
	if (f2 == 'contas1.csv'){
	
		total.shift(0)	
	}
	for ( var i = 0; i < total.length; i++) {

		if(i%2 == 1 && i>1){
			
			aux.push(parseInt(total[i]))
			console.log(total[i])

		}

	}

	console.log("Antes de remover:"+total)

		
	
		for ( var i = 0; i < total.length; i++) {
			if (f2 == 'contas1.csv'){
			aux.push(parseInt(total[i]))
			console.log(aux)
			}else if (f2 == 'contas2.csv') {
				for ( var i = 0; i < total.length; i++) {
	
					if(i%2 == 1 && i>1){
						
						aux.push(parseInt(total[i]))
						
						
					}
					
				}
				
			}
		}
	console.log("Acm"+acm)
	console.log(total)
	console.log(aux)
	
	for ( var i = 0; i < aux.length; i++) {
		acm += aux[i]
	}	

*/
	console.log(acm)
	totalArquivoTipo2 = acm

	// Imprime total 2
	strDiv += '<tr>';
	strDiv += '<td>Total</td>';
	strDiv += '<td>' + totalArquivoTipo2 + '</td>';
	strDiv += '</tr>';
	strDiv += '</table>';

	var CSVsaida = document.getElementById('CSVsaida2');
	CSVsaida.innerHTML = strDiv;
}