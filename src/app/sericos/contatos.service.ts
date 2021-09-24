import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  constructor(private firestore:AngularFirestore) { }

  incluir (parametro){
    this.firestore.collection("contatos").add(parametro);
    
  }
}
