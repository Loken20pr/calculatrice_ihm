# Bibliothèque de calculs dans IR[X]

Projet réalisé dans le cadre des SAE **S2.02** (Exploration algorithmique) et **S2.05** (Gestion de projet)  
**BUT Informatique 1ère année** — IUT de Rodez — Année universitaire 2025/2026

---

## Équipe

| Nom | Prénom |
|-----|--------|
| Toyboudine | Ali |
| Almayrac | Julie |
| Boucher | Loïs |
| Denizot | Charline |

---

## 📋 Description du projet

Ce projet consiste à développer en Java une **bibliothèque de calculs sur les polynômes** à coefficients réels (c'est-à-dire des éléments de IR[X]).

En gros, un polynôme c'est une expression du type :

```
P(X) = 3.1 X⁵ + 2.7 X³ – 4.1 X + 8.0
```

L'idée est de créer un logiciel qui permet de créer, manipuler et faire des calculs sur ce genre d'objets mathématiques.

---

## ✅ Fonctionnalités réalisées

### Création d'un polynôme
- À partir de ses **coefficients**
- À partir de ses **racines réelles** et du coefficient dominant

### Caractéristiques d'un polynôme
- Degré
- Liste des coefficients
- Limites en −∞ et +∞
- Racines réelles connues

### Opérations disponibles
- ➕ Addition de deux polynômes
- ✖️ Multiplication par un scalaire réel
- ✖️ Produit de deux polynômes
- ➗ Division euclidienne (suivant les puissances décroissantes)
- 📈 Évaluation en un point x (méthode de Horner)
- 📉 Dérivation
- ∫ Intégration (à une constante près)
- 📊 Valeur moyenne sur un intervalle donné

### Persistance des données
- Sauvegarde de polynômes dans des **fichiers texte**
- Chargement depuis un fichier (par coefficients ou par racines)

---

## 🚀 Extensions (bonus)

- 🔍 Recherche de racines réelles (suite de Sturm + dichotomie / méthode de Newton)
- 📐 Interpolation polynomiale
- 📉 Affichage graphique de la courbe (JavaFX)

---

## 🛠️ Technologies utilisées

- **Java** (POO, conception orientée objets)
- **JavaFX** (pour l'interface graphique, si extension graphique réalisée)
- **Git / GitHub** (gestion de version et travail collaboratif)

---

## 📁 Structure du projet

```
SAE_202_205/
├── src/                    # Codes sources Java
│   ├── modele/             # Classes métier (Polynome, Monome...)
│   ├── vue/                # Interface utilisateur
│   └── controleur/         # Logique de contrôle
├── tests/                  # Tests unitaires
├── data/                   # Fichiers de polynômes sauvegardés
├── doc/                    # Documentation technique
└── README.md
```

---

## ▶️ Installation et utilisation

### Prérequis
- Java 17 ou supérieur installé sur la machine
- (Optionnel) JavaFX si l'extension graphique est activée

### Lancer le logiciel

1. Cloner le dépôt :
```bash
git clone https://github.com/<votre-repo>/SAE_202_205.git
```

2. Aller dans le dossier du projet :
```bash
cd SAE_202_205
```

3. Exécuter le fichier `.jar` :
```bash
java -jar polynome.jar
```

> 💡 Un manuel utilisateur détaillé est disponible dans le dossier `/doc/manuel_utilisateur.pdf`

---

## 📅 Organisation du projet

On a suivi un **cycle de développement itératif** avec des itérations de 3 semaines, inspiré des méthodes agiles.

| Itération | Période | Objectifs principaux |
|-----------|---------|----------------------|
| 1 | Semaines 13–15 | Création, affichage, addition |
| 2 | Semaines 16–18 | Multiplication, division, dérivation |
| 3 | Semaines 19–21 | Persistance, intégration, extensions |
| Finalisation | Semaines 22–23 | Tests, corrections, documentation |

---

## 📝 Livrables

- [x] Dossier technique
- [x] Plan projet
- [x] Manuel utilisateur
- [x] Code source + fichier `.jar` exécutable
- [ ] Bilan de projet (ajouté en fin de projet)

---

## 📬 Contact

Projet encadré par :
- Frédéric Barrios — frederic.barrios@iut-rodez.fr
- Casimir Kam — casimir.kam@iut-rodez.fr
- Laurent Wehrlé — laurent.wehrle@iut-rodez.fr
