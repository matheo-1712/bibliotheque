/* 
Créez une classe Livre avec les propriétés suivantes :
• Titre
• Auteur
• Année de publica3on
• Disponibilité (booléen)
*/

export class Livre {
    static collection: Livre[] = [];

    constructor(
        public titre: string,
        public auteur: string,
        public annee: number,
        public disponible: boolean
    ) {}

    // Méthode pour afficher les informations d'un livre
    afficher() {
        console.log(`Titre : ${this.titre}`);
        console.log(`Auteur : ${this.auteur}`);
        console.log(`Année de publication : ${this.annee}`);
        console.log(`Disponible : ${this.disponible}`);
    }

    // Méthode statique pour ajouter un livre à la collection
    static ajouterLivre(titre: string, auteur: string, annee: number, disponible: boolean): Livre {
        const nouveauLivre = new Livre(titre, auteur, annee, disponible);
        Livre.collection.push(nouveauLivre);
        console.log(`Livre "${titre}" créé avec succès et ajouté à la collection!`);
        return nouveauLivre;
    }

    // Méthode statique pour afficher tous les livres dans la collection
    static afficherCollection(): void {
        if (Livre.collection.length === 0) {
            console.log("Aucun livre dans la collection.");
        } else {
            Livre.collection.forEach((livre, index) => {
                console.log(`Livre ${index + 1}:`);
                livre.afficher();
                console.log("----------------------");
            });
        }
    }

    // Emprunter un livre
    static emprunterLivre(livre : Livre): boolean {
        const etatLivre = livre.disponible

        if (etatLivre) {
            livre.disponible = false;
            console.log(`Livre ${livre.titre} emprunté avec succès !`);
            return true
        } else {
            console.log("Livre non disponible pour l'emprunt")
            return false
        }

    }

    // Trouver un livre par titre
    static getLivreParTitre(titre: string): Livre | void {
        const livreTrouve = Livre.collection.find(livre => livre.titre.toLowerCase() === titre.toLowerCase());
        if (livreTrouve) {
            console.log(`Livre trouvé :`);
            livreTrouve.afficher();
            return livreTrouve;
        } else {
            console.log(`Aucun livre trouvé avec le titre "${titre}".`);
        }
    }
}
