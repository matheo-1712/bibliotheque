"use strict";
/*
Créez une classe Emprunteur avec les propriétés suivantes :
• Nom
• Email
• Liste des livres empruntés
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emprunteur = void 0;
const Livre_1 = require("./Livre");
class Emprunteur {
    constructor(nom, email, livres = []) {
        this.nom = nom;
        this.email = email;
        this.livres = livres;
        this.nom = nom;
        this.email = email;
        this.livres = livres;
    }
    ajouterEmprunt(livre, emprunteur) {
        if (livre) {
            if (Livre_1.Livre.emprunterLivre(livre)) {
                emprunteur.livres.push(livre);
                console.log(`Le livre ${livre.titre} est emprunté avec succès !`);
            }
            else {
                console.log(`Le livre ${livre.titre} n'est pas disponible pour l'emprunt`);
            }
        }
        else {
            console.log(`Le livre n'existe pas dans la collection de livre.`);
        }
    }
}
exports.Emprunteur = Emprunteur;
