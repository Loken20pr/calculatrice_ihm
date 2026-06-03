# Bibliothèque de calculs dans IR[X]

Projet réalisé dans le cadre des SAE **S2.02** (Exploration algorithmique) et **S2.05** (Gestion de projet)  
**BUT Informatique 1ère année** — IUT de Rodez — Année universitaire 2025/2026

---

## Équipe

| Nom | Prénom |
|-----|--------|
| Ali | Toyboudine |
| Boucher | Loïs |
| Blayac Dubouis | Tom |
| Denizot | Charline |

---

## Description du projet

Ce projet consiste à développer en Java une **bibliothèque de calculs sur les polynômes** à coefficients réels (c'est-à-dire des éléments de IR[X]).

Par exemple, un polynôme est une expression du type :

```
P(X) = 3.1 X⁵ + 2.7 X³ – 4.1 X + 8.0
```

L'idée est de créer un logiciel qui permet de créer, manipuler et faire des calculs sur ce genre d'objets mathématiques.

---

## Fonctionnalités réalisées

### Création d'un polynôme
- À partir de ses **coefficients**
- À partir de ses **racines réelles** et du coefficient dominant

### Caractéristiques d'un polynôme
- Degré
- Liste des coefficients
- Limites en −∞ et +∞
- Racines réelles connues

### Opérations disponibles
- Addition de deux polynômes
- Multiplication par un scalaire réel
- Produit de deux polynômes
- Division euclidienne (suivant les puissances décroissantes)
- Évaluation en un point x (méthode de Horner)
- Dérivation
- Intégration (à une constante près)
- Valeur moyenne sur un intervalle donné

### Persistance des données
- Sauvegarde de polynômes dans des **fichiers texte**
- Chargement depuis un fichier (par coefficients ou par racines)

---

## Extensions (bonus)

- Recherche de racines réelles (suite de Sturm + dichotomie / méthode de Newton)
- Interpolation polynomiale

---

## Logiciels utilisées

- **Eclipse IDE**
- **Java - JDK 26** 
- **JUnit 5** 
- **Git / GitHub** 

---

## Structure du projet

```
applicationPolynome/
├── src/                   
│   ├── console/
│   │   ├── LogicielPolynome.java           
│   ├── outils/
│   │   ├── OutilRecuperationDonneePolynome.java
│   │   ├── OutilSauvegarde.java
│   │   ├── SaisieUtilisateur.java                
│   ├── sae202polynome/
│   │   ├── Racine.java
│   │   ├── Polynome.java
│   │   ├── Monome.java
│   └── tests/
│   │   ├── MonomeTest.java
│   │   ├── PolynomeTest.java
│   │   ├── RacineTest.java
├── doc/
│   ├── plan_projet.pdf
│   ├── dossier_technique.pdf
│   └── manuel_utilisateur.pdf
└── spec/
│   └── cahier_des_charges.pdf
```

---

## Installation et utilisation

### Prérequis
- Java 25 ou supérieur installé sur la machine

### Lancer le logiciel

1. Cloner le dépôt :
```bash
git clone https://github.com/Loken20pr/ExploitationPolynome.git
```

2. Aller dans le dossier du projet :
```bash
cd ExploitationPolynome
```

3. Exécuter le fichier `.jar` :
```bash
java -jar applicationPolynome.jar
```

> Un manuel utilisateur détaillé est disponible dans le dossier `/doc/manuel_utilisateur.pdf`

---

## Organisation du projet

Nous avons suivi un **cycle de développement itératif** avec des itérations de 3 semaines, inspiré des méthodes agiles.

| Itération | Période | 
|-----------|---------|
| 1 | Semaines 16–18 | 
| 2 | Semaines 19–21 | 
| 3 | Semaines 21–23 | 

---

## Documentation

Toute la documentation peut se trouver dans le dossier : 

---

## Contact

Projet encadré par :
- Frédéric Barrios - frederic.barrios@iut-rodez.fr
- Casimir Kam - casimir.kam@iut-rodez.fr
- Laurent Wehrlé - laurent.wehrle@iut-rodez.fr

Projet réalisé par : 
- Toyboudine Ali - toyboudine.ali@iut-rodez.fr
- Boucher Loïs - lois.boucher@iut-rodez.fr
- Blayac Dubouis Tom - tom.blayacdubouis@iut-rodez.fr
- Denizot Charline - charline.denizot@iut-rodez.fr
