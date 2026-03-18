const allButtons = document.getElementsByTagName('button');

for (const button of allButtons) {
    button.addEventListener('click', callBackButton);
};

function callBackButton(event) {
    const btnId = event.target.id;
    const btnClassName = event.target.className;

    // appel du modele

    let resultat;
    
    if (btnClassName.includes("touche-gris")) {
        resultat = ajouteChiffre(btnId);
    } else if (btnId === "dot") {
        resultat = virgule();
    } else if (btnId === "C") {
        resultat = reset();
    } else if (btnId === "CE") {
        resultat = effacer();
    } else if (btnId === "RetourArriere") {
        resultat = backspace();
    } else if (btnId === "PlusMoins") {
        resultat = inverseSigne();
    } else if (btnId === "MS") {
        resultat = memorySave();
    } else if (btnId === "MR") {
        resultat = memoryRecall();
    } else if (btnId === "MC") {
        resultat = memoryClear();
    } else if (btnId === "Pourcent") {
        resultat = togglePourcentage();
    } else if (btnClassName.includes("ope")) {
        resultat = effectuerOperation(btnId);
    } else if (btnId === "Exe") {
        resultat = egal();
    } else if (btnId === "MPlus") {
        resultat = memoryAdd();
    } else if (btnId === "MMoins") {
        resultat = memorySubtract();
    }

    renderView(resultat);
}

function renderView(resultat) {
    const screen = document.getElementById('screen');
    screen.innerText = resultat;
}

renderView(nombre);