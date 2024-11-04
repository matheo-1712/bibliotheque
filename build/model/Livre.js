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
    }
    // Méthode pour afficher les informations d'un livre
    afficher() {
        console.log(`Titre : ${this.titre}`);
        console.log(`Auteur : ${this.auteur}`);
        console.log(`Année de publication : ${this.annee}`);
        console.log(`Disponible : ${this.disponible}`);
    }
    // Méthode statique pour ajouter un livre à la collection
    static ajouterLivre(titre, auteur, annee, disponible) {
        const nouveauLivre = new Livre(titre, auteur, annee, disponible);
        Livre.collection.push(nouveauLivre);
        console.log(`Livre "${titre}" créé avec succès et ajouté à la collection!`);
        return nouveauLivre;
    }
    // Méthode statique pour afficher tous les livres dans la collection
    static afficherCollection() {
        if (Livre.collection.length === 0) {
            console.log("Aucun livre dans la collection.");
        }
        else {
            Livre.collection.forEach((livre, index) => {
                console.log(`Livre ${index + 1}:`);
                livre.afficher();
                console.log("----------------------");
            });
        }
    }
    // Emprunter un livre
    static emprunterLivre(livre) {
        const etatLivre = livre.disponible;
        if (etatLivre) {
            livre.disponible = false;
            return true;
        }
        else {
            return false;
        }
    }
    static retourLivre(livre) {
        const etatLivre = livre.disponible;
        if (!etatLivre) {
            livre.disponible = true;
            return true;
        }
        else {
            return false;
        }
    }
    // Trouver un livre par titre
    static getLivreParTitre(titre) {
        const livreTrouve = Livre.collection.find(livre => livre.titre.toLowerCase() === titre.toLowerCase());
        if (livreTrouve) {
            console.log(`Livre trouvé :`);
            livreTrouve.afficher();
            return livreTrouve;
        }
        else {
            console.log(`Échec : Aucun livre trouvé avec le titre "${titre}".`);
        }
    }
}
exports.Livre = Livre;
Livre.collection = [];
