import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { ThemeStorageService } from 'src/app/service/theme-storage.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent {
  selectedColor: string = '';
  showColors: boolean = false;
  colors: { name: string; hexa: string }[] = [
    { name: '', hexa: '#3F51B5' },
    { name: 'orange', hexa: '#FF9800' },
    { name: 'purple', hexa: '#673AB7' },
    { name: 'pink', hexa: '#E91E63' },
  ];
  @Output() readonly modeTheme = new EventEmitter<string>();
  private whatTheme = '';

  onPalette(theme: string) {
    this.whatTheme = theme;
    this.modeTheme.emit(this.whatTheme);
  }

  setThemeColor(theme: string) {
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
    if (theme) {
      const color = themeColors[theme.toLowerCase()];
      if (color) {
        this.selectedColor = color;
      } else {
        console.error('Tema no válido');
      }
    }
  }

  constructor(private themeStorageService: ThemeStorageService) {
    this.setThemeColor(this.themeStorageService.getItem('themeAngular'));
  }

  getSecondWordFromTheme(theme: string): string {
    const themeParts = theme.split('-');
    return themeParts.length > 1 ? themeParts[1] : '';
  }

  toggleColors(): void {
    this.showColors = !this.showColors;
  }

  selectColor(color: any): void {
    this.selectedColor = color.hexa;
    this.showColors = false;
    this.whatTheme = color.name;
    this.modeTheme.emit(this.whatTheme);
  }
}
