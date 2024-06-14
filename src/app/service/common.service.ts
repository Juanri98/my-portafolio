import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  setThemeColor(theme: string): string {
    const themeColors: { [key: string]: string } = {
      'theme-light': '#3F51B5',
      'theme-dark': '#3F51B5',
      'theme-light-orange': '#FF9800',
      'theme-dark-orange': '#FF9800',
      'theme-light-purple': '#673AB7',
      'theme-dark-purple': '#673AB7',
      'theme-light-pink': '#E91E63',
      'theme-dark-pink': '#E91E63',
    };

    const normalizedTheme = theme && theme.toLowerCase();
    if (normalizedTheme && themeColors[normalizedTheme]) {
      return themeColors[normalizedTheme];
    } else {
      return 'Tema no válido';
    }
  }

  extractThemeType(theme: string): string {
    const themeParts = theme.split('-');
    if (themeParts.length >= 2) {
      return themeParts[1];
    }
    return '';
  }
}
