import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Output() readonly darkModeSwitched = new EventEmitter<boolean>();
  first: boolean = true;
  isDark = false;
  textColorDark: string = 'white';
  textColorLight: string = 'black';
  links = [
    { text: 'Dev Juan Gutierrez', route: '' },
    { text: 'Inicio', route: 'home' },
    { text: 'Acerca', route: '/componente2' },
    { text: 'Habilidades', route: '/componente2' },
    { text: 'Servicios', route: '/componente2' },
    { text: 'Experiencia', route: '/componente2' },
    { text: 'Portafolio', route: '/componente2' },
    { text: 'Contacto', route: '/componente2' },
  ];

  toggleMode() {
    this.isDark = !this.isDark;
    this.darkModeSwitched.emit(this.isDark);
  }
}
