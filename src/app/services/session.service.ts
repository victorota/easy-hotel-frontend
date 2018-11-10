import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  public setItem(item, value) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(item, JSON.stringify(value));
    }
  }

  public getItem(item) {
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(localStorage.getItem(item));
    }
  }

  public removeItem(item) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(item);
    }
  }
}
