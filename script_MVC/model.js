class View {
    // Propriétés privées
    #screen;
    #buttons;

    constructor() {
        this.#screen = document.getElementById('screen');
        // On récupère tous les boutons de la calculatrice
        this.#buttons = document.getElementsByTagName('button');
    }

    // Méthode pour mettre à jour l'écran
    updateDisplay(valeur) {
        // Sécurité pour ne pas afficher "undefined"
        if (valeur !== undefined) {
            this.#screen.innerText = valeur;
        }
    }

    // Méthode qui expose les boutons au Contrôleur
    getButtons() {
        return this.#buttons;
    }
}