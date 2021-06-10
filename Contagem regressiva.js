function solucao(numero) {
	//seu codigo aqui
    for (let item = numero; item >= 0;) {
        console.log(item--);
        if(item < 0) {
            console.log("KABUM");
        }
    }
}