
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Injectable, SecurityContext } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { User } from '../modelos/user.model';

export class Utils {

   static team: any[] = [];
   static users: any[] = [
      {
      id: 0,
      name: "admin",
      password: "admin",
      age: 23,
      date: "21/06/2000"
    }
   ]; 
  

}
