export class Medias {
    public idMedia:number;
    public titreMedia:string;
    public sousTitreMedia:string ;
    public descriptionMedia:string;
    public illustrationMedia:string;
    public createdAtMedia:string;
    public updatedAtMedia:string;
    public dureeVideos:string;
    public categorieVideos:string;
    public styleVideos:string;
    public realisateurVideo:string;
    public formatVideo:string;
    public acteurs: []

    constructor(){
        this.idMedia=0;
        this.titreMedia="";
        this.sousTitreMedia="";
        this.descriptionMedia="";
        this.illustrationMedia="";
        this.createdAtMedia="";
        this.updatedAtMedia="";
        this.dureeVideos="";
        this.categorieVideos="";
        this.styleVideos="";
        this.realisateurVideo="";
        this.formatVideo="";
        this.acteurs=[];

    }

}
