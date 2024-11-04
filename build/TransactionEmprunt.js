"use strict";
/* Créez une classe Transac%onEmprunt pour enregistrer les transac3ons d'emprunt, avec les
propriétés suivantes :
• Livre emprunté
• Emprunteur
• Date d'emprunt
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionEmprunt = void 0;
class TransactionEmprunt {
    constructor(livre, emprunteur, date) {
        this.livre = livre;
        this.emprunteur = emprunteur;
        this.date = date;
        this.livre = livre;
        this.emprunteur = emprunteur;
        this.date = date;
    }
    static emprunterLivre(livre, emprunteur, date) {
    }
}
exports.TransactionEmprunt = TransactionEmprunt;
