import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  descripcion: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.descripcion = firestore.collection('inicio').valueChanges();
  }

}
