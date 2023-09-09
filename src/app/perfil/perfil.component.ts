import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  descripcion: Observable<any[]>;
  informacion: Observable<any[]>;
  fechaNacimiento: Date = new Date('1989-09-28'); // Fecha de nacimiento estática

  constructor(private firestore: AngularFirestore) {
    this.descripcion = firestore.collection('inicio').valueChanges();
    this.informacion = firestore.collection('informacion').valueChanges();    
  }

  // Función para calcular la edad
  calcularEdad(fechaNacimiento: Date): number {
    const hoy: Date = new Date();
    const diferenciaAnios: number = hoy.getFullYear() - fechaNacimiento.getFullYear();

    // Ajusta la edad si aún no ha pasado el día y el mes de la fecha de nacimiento
    if (
      hoy.getMonth() < fechaNacimiento.getMonth() ||
      (hoy.getMonth() === fechaNacimiento.getMonth() && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      return diferenciaAnios - 1;
    } else {
      return diferenciaAnios;
    }
  }
  

}
