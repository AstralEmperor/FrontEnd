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
  
  display = '';
  
  toggleMenu(event: any):string{
    if(this.display === 'none'){
        return this.display = 'flex'
    }
    else if(this.display === 'flex'){
      return this.display = 'none'
    }else{
      return this.display = 'flex';
    }
  }
}
