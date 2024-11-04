"use strict";
/*
Créez une classe Livre avec les propriétés suivantes :
• Titre
• Auteur
• Année de publica3on
• Disponibilité (booléen)
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livre = void 0;
class Livre {
    constructor(titre, auteur, annee, disponible) {
        this.titre = titre;
        this.auteur = auteur;
        this.annee = annee;
        this.disponible = disponible;
        this.titre = titre;
        this.auteur = auteur;
        this.annee = annee;
        this.disponible = disponible;
    }
    afficher() {
        console.log(`Titre : ${this.titre}`);
        console.log(`Auteur : ${this.auteur}`);
        console.log(`Année de publication : ${this.annee}`);
        console.log(`Disponible : ${this.disponible}`);
    }
}
exports.Livre = Livre;
