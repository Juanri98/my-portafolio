import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Output() readonly darkModeSwitched = new EventEmitter<boolean>();
  first: boolean = true;
  isDark = false;
  textColorDark: string = 'white';
  textColorLight: string = 'black';
  currentRoute: string | undefined;
  links = [
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

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  ngOnInit(): void {}
}
