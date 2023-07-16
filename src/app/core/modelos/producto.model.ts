export interface Producto {
    id: any;
    name: any;
    logo: any;
    image: any;
    selected: boolean;
  }
  
  export class Producto implements Producto {

    constructor(public id: any, public name: any,  public logo: any, public image: any) {
      this.selected=false;
    };
  
  
  }