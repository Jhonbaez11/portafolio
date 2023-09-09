import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

  descripcion: Observable<any[]>;
  portafolio: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    
    this.descripcion = firestore.collection('inicio').valueChanges();
    // Obtener los documentos de la colección "portafolio" y ordenarlos
    this.portafolio = firestore.collection('portafolio').valueChanges().pipe(
      map((tecs: any[]) => {
        // Ordenar los documentos según el orden deseado
        return tecs.sort((a, b) => {
          const order = ['portafolio', 'portafolio2', 'portafolio3', 'portafolio4'];
          return order.indexOf(a.nombre) - order.indexOf(b.nombre);
        });
      })
    );
  }

}
