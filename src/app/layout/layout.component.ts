import { Component, AfterViewInit, Renderer2, Inject, ElementRef } from '@angular/core';
import Typed from 'typed.js';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  mobileNavActive = false; // Variable para rastrear si el menú móvil está abierto
  showPreloader = true; // Variable para mostrar u ocultar el preloader

  constructor(
    private firestore: AngularFirestore,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private el: ElementRef
  ) {   

    // Retrasar la eliminación del preloader
    setTimeout(() => {
      this.showPreloader = false;
      const preloader = this.el.nativeElement.querySelector('#preloader');
      if (preloader) {
        preloader.remove();
      }
    }, 2000); // Cambia este valor al tiempo que desees mostrar el preloader
  }

  ngAfterViewInit(): void {
    const typed = new Typed('.typed', {
      strings: ['Desarrollador Full Stack'],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    });
  } 

  toggleMobileMenu() {
    this.mobileNavActive = !this.mobileNavActive; // Alternar el estado del menú móvil

    if (this.mobileNavActive) {
      this.renderer.addClass(this.document.body, 'mobile-nav-active'); // Agregar la clase al body
    } else {
      this.renderer.removeClass(this.document.body, 'mobile-nav-active'); // Quitar la clase del body
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplazamiento suave hacia arriba
  }

}
