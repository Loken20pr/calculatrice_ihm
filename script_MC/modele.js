// Variables globales du modèle
let nombre = 0;
let memoire = 0;
let pourcentageActif = false;
let operande1 = 0;
let operateur = null;
let resultat = 0;


// Fonction du modèle

// Fonction qui ajoute un chiffre à droite d'un nombre
function ajouteChiffre(chiffre) {
    console.log("Appel du modèle");
    let nbStr = nombre.toString(10) + chiffre.toString(10);
    nombre = Number(nbStr);
    return nombre;
}

function effacer() {
    nombre = 0;
    return nombre;
}

function reset() {
    effacer();
    operande1 = 0;
    operateur = null;
    return nombre;
}

function backspace() {
    let nbStr = nombre.toString(10);
    nbStr = nbStr.slice(0, -1);
    nombre = Number(nbStr);

    if (isNaN(nombre)) {
        nombre = 0;
    }

    return nombre;
}

function inverseSigne() {
    nombre = -nombre;
    return nombre;
}

function memorySave() {
    memoire = nombre;
    return nombre;
}

function memoryRecall() {
    nombre = memoire;
    return nombre;
}

function memoryClear() {
    memoire = 0;
    return nombre;
}

function memoryAdd() {
    memoire += nombre;
    return nombre;
}

function memorySubtract() {
    memoire -= nombre;
    return nombre;
}


function togglePourcentage() {
    if (!pourcentageActif) {
        nombre = nombre * 100;
        pourcentageActif = true;
    } else {
        nombre = nombre / 100;
        pourcentageActif = false;
    }
    return nombre;
}

function virgule() {
    let nbStr = nombre.toString(10);
    if (!nbStr.includes('.')) {
        nbStr += '.';
        nombre = Number(nbStr);
    }
    return nombre;
}

function effectuerOperation(idBouton) {

    if (operateur !== null) {
        nombre = egal();
    }

    operateur = null;
    operande1 = nombre;
    nombre = 0;

    switch(idBouton) {
        case "Plus":
            return addition();
        case "Moins":
            return soustraction();
        case "Fois":
            return multiplication();
        case "Div":
            return division();
        default:
            return nombre;
    }

    return operande1 + "" + operateur;
}

function addition() {
    operateur = '+';
    return operande1;
}

function soustraction() {
    operateur = '-';
    return operande1;
}

function multiplication() {
    operateur = '*';
    return operande1;
}

function division() {
    operateur = '/';
    return operande1;
}

function egal() {
    switch(operateur) {
        case '+':
            resultat = operande1 + nombre;
            break;
        case '-':
            resultat = operande1 - nombre;
            break;
        case '*':
            resultat = operande1 * nombre;
            break;
        case '/':
            if (nombre !== 0) {
                resultat = operande1 / nombre;
            } else {
                resultat = "Div. par 0";
            }
            break;
        default:
            return nombre;
    }

    operateur = null;
    nombre = resultat;
    operande1 = 0;
    return nombre;
};
