import { Wookie } from "./wookie";

/**
 * represente le selfie d un wookie
 */
export class Selfie {

    image: string="" ;
    wookie: Wookie ;

    constructor(){
        this.wookie=new Wookie() ;
    }

}
