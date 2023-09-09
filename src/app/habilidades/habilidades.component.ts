import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {

  frontend: Observable<any[]>;
  backend: Observable<any[]>;
  framework: Observable<any[]>;
  database: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.frontend = firestore.collection('habilidades_front').valueChanges();
    this.backend = firestore.collection('habilidades_back').valueChanges();
    this.framework = firestore.collection('habilidades_frame').valueChanges();
    this.database = firestore.collection('habilidades_db').valueChanges();
  }

}
