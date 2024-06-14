import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { ThemeStorageService } from 'src/app/service/theme-storage.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent implements OnInit {
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
    this.emitChangeColor();
  }

  constructor(private themeStorageService: ThemeStorageService, private commonService: CommonService) {}
  ngOnInit(): void {
    this.selectedColor = this.commonService.setThemeColor(this.themeStorageService.getItem('themeAngular'));
  }

  toggleColors(): void {
    this.showColors = !this.showColors;
  }

  selectColor(color: any): void {
    this.selectedColor = color.hexa;
    this.showColors = false;
    this.whatTheme = color.name;
    this.emitChangeColor();
  }

  emitChangeColor() {
    this.themeStorageService.storageSubject.next(this.selectedColor);
    this.modeTheme.emit(this.whatTheme);
  }
}
