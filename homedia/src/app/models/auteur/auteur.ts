import { Livre } from './../livre/livre';
export class Auteur {

  public idAuteur:number;
  public nomAuteur:string;
  public prenomAuteur:string;
  public bioAuteur :string;
  public wikiAuteur :string;
  public illustrationAuteur :string;
  public styleAuteur:string;
  constructor(){this.idAuteur =0;
    this.nomAuteur ="";
    this.prenomAuteur ="";
    this.bioAuteur ="";
    this.wikiAuteur ="";
    this.illustrationAuteur ="";
    this.styleAuteur ="";
  }
}
