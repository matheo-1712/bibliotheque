/* Créez une classe Transac%onEmprunt pour enregistrer les transac3ons d'emprunt, avec les 
propriétés suivantes :
• Livre emprunté
• Emprunteur
• Date d'emprunt 
*/

import { Livre } from "./model/Livre";
import { Emprunteur } from "./model/Emprunteur";

export class TransactionEmprunt {

    static transactions: TransactionEmprunt[] = [];

    constructor(public livre: Livre,  public emprunteur: Emprunteur, public action: string, public date_action: Date, public date_retour: Date) { }

    afficher() {
        console.log(`Livre : ${this.livre.titre}`)
        console.log(`Emprunteur : ${this.emprunteur.nom}`)
        console.log(`Nature de la transaction : ${this.action}`)
        console.log(`Date d'emprunt : ${this.date_action}`)
        console.log(`Date de retour prévue : ${this.date_retour}`)
    }

    static emprunterLivre(livre: Livre, emprunteur: Emprunteur): void {
        if (Emprunteur.ajouterEmprunt(livre, emprunteur)) {

            // Créer une nouvelle transaction d'emprunt
            const transaction = new TransactionEmprunt(livre, emprunteur, 'emprunt', new Date(), new Date(Date.now() + 7 * 24 * 60 * 60 * 1000));
            TransactionEmprunt.transactions.push(transaction);

        }
    }

    static retourLivre(livre: Livre, emprunteur: Emprunteur): void {
        if (Emprunteur.retourEmprunt(livre, emprunteur)) {

            // Créer une nouvelle transaction de retour
            const transaction = new TransactionEmprunt(livre, emprunteur, 'retour', new Date(), new Date());
            TransactionEmprunt.transactions.push(transaction);

        }
    }

    static afficherTransactions(): void {
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