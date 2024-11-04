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
    afficher() {
        console.log(this.nom);
        console.log(this.email);
        console.log(this.livres);
    }
    static ajouterEmprunt(livre, emprunteur) {
        if (livre) {
            if (emprunteur.livres.length >= 3) {
                console.log(`Échec : ${emprunteur.nom} a déjà 3 livres empruntés. Impossible d'emprunter ${livre.titre}.`);
            }
            if (Livre_1.Livre.emprunterLivre(livre)) {
                emprunteur.livres.push(livre);
                console.log(`Le livre ${livre.titre} est emprunté avec succès !`);
                return true;
            }
            else {
                console.log(`Échec : Le livre ${livre.titre} n'est pas disponible pour l'emprunt`);
                return false;
            }
        }
        else {
            console.log(`Échec : Le livre n'existe pas dans la collection de livre.`);
            return false;
        }
    }
    static retourEmprunt(livre, emprunteur) {
        if (livre) {
            if (Livre_1.Livre.retourLivre(livre)) {
                emprunteur.livres.splice(emprunteur.livres.indexOf(livre), 1);
                console.log(`Le livre ${livre.titre} est retourné avec succès !`);
                return true;
            }
            else {
                console.log(`Échec : Le livre ${livre.titre} n'est pas disponible pour le retour`);
                return false;
            }
        }
        else {
            console.log(`Échec : Le livre n'existe pas dans la collection de livre.`);
            return false;
        }
    }
}
exports.Emprunteur = Emprunteur;
