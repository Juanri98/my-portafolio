import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/service/common.service';
import { ThemeStorageService } from 'src/app/service/theme-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  themeType: boolean | string;
  storageSubscription: Subscription | undefined;
  constructor(private commonService: CommonService, private themeStorageService: ThemeStorageService) {
    this.storageSubscription = this.themeStorageService.getStorageChanges().subscribe((value) => {
      if (value && value !== this.themeType) {
        this.getIconClass(value);
      }
    });
    this.themeType = this.commonService.extractThemeType(this.themeStorageService.getItem('themeAngular'));
  }
  ngOnInit(): void {
    this.themeType = false;
  }

  getIconClass(value: string) {
    this.themeType = value === 'dark' ? true : false;
  }

  ngOnDestroy(): void {
    if (this.storageSubscription) {
      this.storageSubscription.unsubscribe();
    }
  }
}
