import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public navigateToSection(section: string){
    window.location.hash = ''
    window.location.hash = section
  }
}
