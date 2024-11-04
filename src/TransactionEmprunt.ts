/* Créez une classe Transac%onEmprunt pour enregistrer les transac3ons d'emprunt, avec les 
propriétés suivantes :
• Livre emprunté
• Emprunteur
• Date d'emprunt 
*/

import { Livre } from "./model/Livre";
import { Emprunteur } from "./model/Emprunteur";

export class TransactionEmprunt {
    constructor(public livre: Livre, public emprunteur: Emprunteur, public date: Date) {
        this.livre = livre;
        this.emprunteur = emprunteur;
        this.date = date;
    }

    static emprunterLivre(livre: Livre, emprunteur: Emprunteur, date: Date): TransactionEmprunt {
        
    }
    
}