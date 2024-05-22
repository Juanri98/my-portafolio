import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ThemeStorageService } from './service/theme-storage.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private overlayContainer: OverlayContainer, private themeStorageService: ThemeStorageService) { }
  
  private isDark = false;
  private whatTheme = '';
  class: string | undefined;

  @HostBinding('class')
  get themeMode() {
    const containerElement = this.overlayContainer.getContainerElement();

    const classesToRemove = Array.from(containerElement.classList).filter(
      (className) => className.startsWith('theme-')
    );

    classesToRemove.forEach((className) =>
      containerElement.classList.remove(className)
    );

    if (this.isDark) {
      this.class =
        this.whatTheme.length <= 0
          ? 'theme-dark'
          : `theme-dark-${this.whatTheme}`;
    } else {
      this.class =
        this.whatTheme.length <= 0
          ? 'theme-light'
          : `theme-light-${this.whatTheme}`;
    }
    this.themeStorageService.setItem('themeAngular', this.class);
    containerElement.classList.add(this.class);

    return this.class;
  }

  switchMode(isDarkMode: any) {
    this.isDark = isDarkMode;
  }
  switcColor(color: any) {
    this.whatTheme = color;
  }

  ngOnInit() {
    const storedTheme = this.themeStorageService.getItem('themeAngular');
    if (storedTheme) {
      this.applyStoredTheme(storedTheme);
    }
  }

  private applyStoredTheme(storedTheme: string) {

    const themeParts = storedTheme.split('-');
    if (themeParts.length >= 2) {
      this.isDark = themeParts[1] === 'dark';
      this.whatTheme = themeParts.length >= 3 ? themeParts[2] : '';
    } else {
      this.whatTheme = '';
    }
  }
}
