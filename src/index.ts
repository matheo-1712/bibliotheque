import { Emprunteur } from "./model/Emprunteur";
import { Livre } from "./model/Livre";
import { TransactionEmprunt } from "./TransactionEmprunt";

// Ajout de livres à la collection
Livre.ajouterLivre("Les Misérables", "Victor Hugo", 1862, true);
Livre.ajouterLivre("1984", "George Orwell", 1949, false);
Livre.ajouterLivre("Le Petit Prince", "Antoine de Saint-Exupéry", 1943, true);

// Création d'un emprunteur
let emprunteur = new Emprunteur('Léonard', 'Lenoad@mail.com',[])

// Récupération des informations du livre a emprunter
let livre1 = Livre.getLivreParTitre("Les Misérables")!

// Emprunt d'un livre
TransactionEmprunt.emprunterLivre(livre1, emprunteur)
TransactionEmprunt.emprunterLivre(livre1, emprunteur)

// Retour d'un livre
TransactionEmprunt.retourLivre(livre1, emprunteur)

// Affichage des transactions réalisés
TransactionEmprunt.afficherTransactions()

emprunteur.afficher()

