import { Component } from '@angular/core';

@Component({
  selector: 'app-pheader',
  templateUrl: './pheader.component.html',
  styleUrls: ['./pheader.component.css']
})
export class PheaderComponent {
  isHomeActive: boolean = true;

  setActive(navItem: string) {
    if (navItem === 'home') {
      this.isHomeActive = true;
    } else {
      this.isHomeActive = false;
    }
  }
}
