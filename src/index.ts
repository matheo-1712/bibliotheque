import { Livre } from "./model/Livre";

// Ajout de livres à la collection
Livre.ajouterLivre("Les Misérables", "Victor Hugo", 1862, true);
Livre.ajouterLivre("1984", "George Orwell", 1949, false);
Livre.ajouterLivre("Le Petit Prince", "Antoine de Saint-Exupéry", 1943, true);

// Affichage de tous les livres dans la collection
Livre.afficherCollection();
