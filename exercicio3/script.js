let nacionalidade = prompt('Qual é a sua nacionalidade?');

const nacionalidadeConst = nacionalidade

if (nacionalidadeConst === "brasileira"){ 
    alert('Você é brasileiro! Login Aceito')
    console.log("Brasileiro")
    }
 else if (nacionalidadeConst === "uruguaia"){
    alert('Você é uruguaio! Login aceito')
    console.log("Uruguaio")
 } 
 else if (nacionalidadeConst === "argentina"){
    alert('Você é argentino! login aceito')
    console.log("Argentino")
 }
 else if (nacionalidadeConst === " Chilena "){
    alert('Você é Chileno! Login aceito')
    console.log('Chileno')
 }
else if (nacionalidadeConst === " colombiano "){
    alert(' Você é Colombiano! Login aceito')
    console.log("Colombiano")
}
else {
    alert('Como não respondeu o que foi pedido, imagino que deve ser burro. Por favor, tente novamente')
    console.log('Nacionalidade não encontrada')
}