class View {
    // Propriétés privées
    #screen;
    #AllButtons;

	constructor(){
		this.#screen = document.getElementById('screen');
		this.#AllButtons = document.getElementById('button');
	}
	
	// Fonction d'affichage
	updateDisplay(nombre) {
		this.#screen.innerText = nombre;
	}
	getAllButtons() {
		return this.#AllButtons;
	}
	
}