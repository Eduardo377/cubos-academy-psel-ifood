function solucao(letra, palavras) {
	//seu codigo aqui
    let incorretas= 0;
    
    for (let palavra of palavras){
    if(palavra[0] != letra) {
      incorretas++
    }
}
console.log(incorretas)
}