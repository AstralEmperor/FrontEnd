import { Component } from '@angular/core';

@Component({
  selector: 'title-section',
  templateUrl: './title-section.component.html',
  styleUrls: ['./title-section.component.css']
})
export class TitleSectionComponent {
  public goTo(section: string){
    window.location.hash =''
    window.location.hash = section
  }
}
