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

    afficher() {
       console.log(this.nom)
       console.log(this.email)
       console.log(this.livres) 
    }

    static ajouterEmprunt(livre: Livre, emprunteur: Emprunteur): boolean {
        if (livre) {
            if (Livre.emprunterLivre(livre)) {
                emprunteur.livres.push(livre)
                console.log (`Le livre ${livre.titre} est emprunté avec succès !`)
                return true
            } else {
                console.log(`Le livre ${livre.titre} n'est pas disponible pour l'emprunt`)
                return false
            }

        } else {
            console.log(`Le livre n'existe pas dans la collection de livre.`)
            return false
        }
    }

    static retourEmprunt(livre: Livre, emprunteur: Emprunteur): boolean {
        if (emprunteur.livres.includes(livre)) {
            if (Livre.retourLivre(livre)) {
                emprunteur.livres.splice(emprunteur.livres.indexOf(livre), 1)
                console.log (`Le livre ${livre.titre} est retourné avec succès !`)
                return true
            } else {
                console.log(`Le livre ${livre.titre} n'est pas disponible pour le retour`)
                return false
            }
        } else {
            console.log(`Le livre n'existe pas dans la collection de livre.`)
            return false
        }
    }

}