import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeStorageService {
  private storage: Storage = localStorage; // Cambia a sessionStorage si lo prefieres
  public storageSubject = new BehaviorSubject<string | null>(null);

  constructor() {}

  setItem(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string) {
    const value = this.storage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  removeItem(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }

  getStorageChanges() {
    return this.storageSubject.asObservable();
  }
}
