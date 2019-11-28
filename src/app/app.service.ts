import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }


  redirectToQWChat() {
    window.open('https://messenger.quickwork.co', '_blank');
  }
}
