import { ElementRef, Injectable } from '@angular/core';
import { Language } from '../model/interfaces/selection-item';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private sidenav!: MatSidenav;

  constructor() { }

  set(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  open() {
    this.sidenav.open();
  }

  close() {
    this.sidenav.close();
  }
}
