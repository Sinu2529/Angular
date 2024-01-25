import { Injectable } from '@angular/core';
import { ServerComponent } from './server/server.component';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  openPopup() {
    const popup='width=500, heigth=300,resizeable=yes';
    window.open('ServerComponent', 'Popup', popup);
}

}