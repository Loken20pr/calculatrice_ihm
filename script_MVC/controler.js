class Controller {
	// Propriété privé
	#model;
	#view;
	
	constructor(argModel, argView) {
		this.#model = argModel
		this.#view = argView;
		this.init();
	}
	
	init() {
		/* Méthode déclenchée à l'initialisation du Controler */
		console.log("méthode init de Controller");
		this.binding;
		
		this.updateView(this.#model.getButton)
	}
	
}