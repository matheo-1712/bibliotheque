"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Emprunteur_1 = require("./model/Emprunteur");
const Livre_1 = require("./model/Livre");
const TransactionEmprunt_1 = require("./TransactionEmprunt");
// Ajout de livres à la collection
Livre_1.Livre.ajouterLivre("Les Misérables", "Victor Hugo", 1862, true);
Livre_1.Livre.ajouterLivre("1984", "George Orwell", 1949, false);
Livre_1.Livre.ajouterLivre("Le Petit Prince", "Antoine de Saint-Exupéry", 1943, true);
// Création d'un emprunteur
let emprunteur = new Emprunteur_1.Emprunteur('Léonard', 'Lenoad@mail.com', []);
// Récupération des informations du livre a emprunter
let livre1 = Livre_1.Livre.getLivreParTitre("Les Misérables");
// Emprunt d'un livre
TransactionEmprunt_1.TransactionEmprunt.emprunterLivre(livre1, emprunteur);
TransactionEmprunt_1.TransactionEmprunt.emprunterLivre(livre1, emprunteur);
// Retour d'un livre
TransactionEmprunt_1.TransactionEmprunt.retourLivre(livre1, emprunteur);
// Affichage des transactions réalisés
TransactionEmprunt_1.TransactionEmprunt.afficherTransactions();
emprunteur.afficher();
