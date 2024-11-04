"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bibliotheque = void 0;
class Bibliotheque {
    constructor() {
        this.livres = [];
    }
    ajouterLivre(livre) {
        this.livres.push(livre);
    }
}
exports.Bibliotheque = Bibliotheque;
