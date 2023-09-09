import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent {

  educacion: Observable<any[]>;
  laboral: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    
    // Obtener los documentos de la colección "educacion" y ordenarlos
    this.educacion = firestore.collection('educacion').valueChanges().pipe(
      map((tecs: any[]) => {
        // Ordenar los documentos según el orden deseado
        return tecs.sort((a, b) => {
          const order = ['educacion', 'educacion2', 'educacion3', 'educacion4'];
          return order.indexOf(a.nombre) - order.indexOf(b.nombre);
        });
      })
    );

    // Obtener los documentos de la colección "laboral" y ordenarlos
    this.laboral = firestore.collection('laboral').valueChanges().pipe(
      map((tecs: any[]) => {
        // Ordenar los documentos según el orden deseado
        return tecs.sort((a, b) => {
          const order = ['laboral', 'laboral2', 'laboral3', 'laboral4'];
          return order.indexOf(a.nombre) - order.indexOf(b.nombre);
        });
      })
    );
  }


}
