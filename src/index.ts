import { Emprunteur } from "./model/Emprunteur";
import { Livre } from "./model/Livre";
import { TransactionEmprunt } from "./TransactionEmprunt";

// 1. Ajout de livres à la collection
const livre1 = Livre.ajouterLivre("Les Misérables", "Victor Hugo", 1862, true);
const livre2 = Livre.ajouterLivre("1984", "George Orwell", 1949, true);
const livre3 = Livre.ajouterLivre("Le Petit Prince", "Antoine de Saint-Exupéry", 1943, true);
const livre4 = Livre.ajouterLivre("Moby Dick", "Herman Melville", 1851, false); // Emprunté
const livre5 = Livre.ajouterLivre("Germinal", "Émile Zola", 1885, true);
const livre6 = Livre.ajouterLivre("Pride and Prejudice", "Jane Austen", 1813, true);
const livre7 = Livre.ajouterLivre("Brave New World", "Aldous Huxley", 1932, true);

// 2. Création d'emprunteurs
const emprunteur1 = new Emprunteur('Léonard', 'lenoad@mail.com', []);
const emprunteur2 = new Emprunteur('Alice', 'alice@mail.com', []);

// 3. Tests d'emprunt de livres

// Emprunter des livres jusqu'à la limite de 3 livres par emprunteur
console.log("Test : Emprunter des livres pour Léonard (jusqu'à 3 livres)");
TransactionEmprunt.emprunterLivre(livre1, emprunteur1); // Attendu : succès
TransactionEmprunt.emprunterLivre(livre2, emprunteur1); // Attendu : succès
TransactionEmprunt.emprunterLivre(livre3, emprunteur1); // Attendu : succès

// Essayer d'emprunter un 4ème livre (échec)
console.log("Test : Essayer d'emprunter un 4ème livre (Germinal)");
TransactionEmprunt.emprunterLivre(livre5, emprunteur1); // Attendu : échec

// Emprunter des livres pour Alice
console.log("Test : Emprunter des livres pour Alice (jusqu'à 3 livres)");
TransactionEmprunt.emprunterLivre(livre6, emprunteur2); // Attendu : succès
TransactionEmprunt.emprunterLivre(livre7, emprunteur2); // Attendu : succès

// 4. Tests de retour de livres

// Retourner un livre emprunté
console.log("Test : Retourner un livre emprunté (Les Misérables)");
TransactionEmprunt.retourLivre(livre1, emprunteur1); // Attendu : succès

// Essayer de retourner un livre qui n'est pas emprunté par l'emprunteur
console.log("Test : Essayer de retourner un livre qui n'est pas emprunté (Moby Dick)");
TransactionEmprunt.retourLivre(livre4, emprunteur1); // Attendu : échec (pas emprunté par Léonard)

// Affichage des transactions réalisées
console.log("\nTransactions réalisées :");
TransactionEmprunt.afficherTransactions();

// Affichage des informations de chaque emprunteur
console.log("\nInformations sur les emprunteurs :");
emprunteur1.afficher();
emprunteur2.afficher();

// Affichage de la collection de livres
console.log("\nLivres dans la collection :");
Livre.afficherCollection();
