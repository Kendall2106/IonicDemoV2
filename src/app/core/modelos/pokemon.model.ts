export interface Pokemon {
    id: any;
    name: any;
    image: any;
    selected: boolean;
  }
  
export class Pokemon implements Pokemon {
  constructor(public id: any, public name: any, public image: any) {
    this.selected=false;
  };
}