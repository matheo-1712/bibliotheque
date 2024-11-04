/*
Créez une classe Emprunteur avec les propriétés suivantes :
• Nom
• Email
• Liste des livres empruntés
*/

import { Livre } from "./Livre";

export class Emprunteur {
    constructor(public nom: string, public email: string, public livres: Livre[] = []) {
        this.nom = nom;
        this.email = email;
        this.livres = livres;
    }

    ajouterEmprunt(livre: Livre, emprunteur: Emprunteur): void {
        if (livre) {
            if (Livre.emprunterLivre(livre)) {
                emprunteur.livres.push(livre)
                console.log (`Le livre ${livre.titre} est emprunté avec succès !`)
            } else {
                console.log(`Le livre ${livre.titre} n'est pas disponible pour l'emprunt`)
            }

        } else {
            console.log(`Le livre n'existe pas dans la collection de livre.`)
        }
    }

}