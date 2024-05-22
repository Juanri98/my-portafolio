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
    { text: 'Acerca', route: 'about' },
    { text: 'Habilidades', route: 'skills' },
    { text: 'Servicios', route: 'service' },
    { text: 'Experiencia', route: 'experience' },
    { text: 'Portafolio', route: 'projects' },
    { text: 'Contacto', route: 'contact' },
  ];

  toggleMode() {
    this.isDark = !this.isDark;
    this.darkModeSwitched.emit(this.isDark);
  }
}
