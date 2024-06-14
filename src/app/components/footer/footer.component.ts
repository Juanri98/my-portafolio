import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/service/common.service';
import { ThemeStorageService } from 'src/app/service/theme-storage.service';
import { Enlace } from '../../shared/models/enlace.model';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnDestroy {
  enlaces: Enlace[] = [
    { ruta: 'home', texto: 'Inicio' },
    { ruta: 'about', texto: 'Sobre Nosotros' },
    { ruta: 'skills', texto: 'Habilidades' },
    { ruta: 'contact', texto: 'Contacto' },
  ];

  themeValue: any;
  storageSubscription: Subscription | undefined;
  constructor(private themeStorageService: ThemeStorageService, private commonService: CommonService) {}

  ngOnInit(): void {
    this.themeValue = this.commonService.setThemeColor(this.themeStorageService.getItem('themeAngular'));
    const rutaSeleccionada = this.themeStorageService.getItem('rutaSeleccionada');
    if (rutaSeleccionada) {
      this.seleccionarEnlace(rutaSeleccionada);
    }

    this.storageSubscription = this.themeStorageService.getStorageChanges().subscribe((value) => {
      if (value && value !== this.themeValue) {
        this.themeValue = value;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.storageSubscription) {
      this.storageSubscription.unsubscribe();
    }
  }

  seleccionarEnlace(ruta: string) {
    this.themeStorageService.setItem('rutaSeleccionada', ruta);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
