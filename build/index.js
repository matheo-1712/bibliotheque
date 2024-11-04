"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Livre_1 = require("./model/Livre");
// Ajout de livres à la collection
Livre_1.Livre.ajouterLivre("Les Misérables", "Victor Hugo", 1862, true);
Livre_1.Livre.ajouterLivre("1984", "George Orwell", 1949, false);
Livre_1.Livre.ajouterLivre("Le Petit Prince", "Antoine de Saint-Exupéry", 1943, true);
// Affichage de tous les livres dans la collection
Livre_1.Livre.afficherCollection();
