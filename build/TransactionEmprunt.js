"use strict";
/* Créez une classe Transac%onEmprunt pour enregistrer les transac3ons d'emprunt, avec les
propriétés suivantes :
• Livre emprunté
• Emprunteur
• Date d'emprunt
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionEmprunt = void 0;
const Emprunteur_1 = require("./model/Emprunteur");
class TransactionEmprunt {
    constructor(livre, emprunteur, action, date_action, date_retour) {
        this.livre = livre;
        this.emprunteur = emprunteur;
        this.action = action;
        this.date_action = date_action;
        this.date_retour = date_retour;
    }
    afficher() {
        console.log(`Livre : ${this.livre.titre}`);
        console.log(`Emprunteur : ${this.emprunteur.nom}`);
        console.log(`Nature de la transaction : ${this.action}`);
        console.log(`Date d'emprunt : ${this.date_action}`);
        console.log(`Date de retour : ${this.date_retour}`);
    }
    static emprunterLivre(livre, emprunteur) {
        if (Emprunteur_1.Emprunteur.ajouterEmprunt(livre, emprunteur)) {
            // Créer une nouvelle transaction d'emprunt
            const transaction = new TransactionEmprunt(livre, emprunteur, 'emprunt', new Date(), new Date(Date.now() + 7 * 24 * 60 * 60 * 1000));
            TransactionEmprunt.transactions.push(transaction);
        }
    }
    static retourLivre(livre, emprunteur) {
        if (Emprunteur_1.Emprunteur.retourEmprunt(livre, emprunteur)) {
            // Créer une nouvelle transaction de retour
            const transaction = new TransactionEmprunt(livre, emprunteur, 'retour', new Date(), new Date());
            TransactionEmprunt.transactions.push(transaction);
        }
    }
    static afficherTransactions() {
        if (TransactionEmprunt.transactions.length === 0) {
            console.log("Aucune transaction d'emprunt enregistrée.");
            return;
        }
        console.log("Transactions d'emprunt :");
        TransactionEmprunt.transactions.forEach((transaction, index) => {
            console.log(`Transaction ${index + 1}:`);
            transaction.afficher();
            console.log("----------------------");
        });
    }
}
exports.TransactionEmprunt = TransactionEmprunt;
TransactionEmprunt.transactions = [];
