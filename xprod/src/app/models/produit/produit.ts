export class Produit {
    public idProduit: number
    public refInterneProduit: string;
    public designationProduit: string;
    public descriptifProduit: string;
    public prixVenteUProduit: number;
    constructor() {
        this.idProduit = 0;
        this.refInterneProduit = "";
        this.designationProduit = "";
        this.descriptifProduit = "";
        this.prixVenteUProduit = 0;
    }
} 
