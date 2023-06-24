export interface User {
    id: any;
    name: any;
    password: any;
    age: any;
    date: any;
  }

export class User implements User {
  constructor(public id: any, public name: any, public password: any, public age: any, public date: any) {};
}