import { Component, Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public navigateToSection(section: string){
    window.location.hash = ''
    window.location.hash = section
  }
  
  display = 'flex';
  toggleMenu(event: any):string{
    console.log(this.display);
    return this.display = 'flex' ? 'none' : 'flex';
  }
}
