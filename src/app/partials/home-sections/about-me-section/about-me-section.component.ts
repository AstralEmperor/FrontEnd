import { Component } from '@angular/core';

@Component({
  selector: 'about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.css']
})
export class AboutMeSectionComponent {

  active:boolean = false;
  text:string ="Read More";
  show(active:boolean):boolean{
    return this.active = !this.active;
  }
  showText(active:boolean):string{
    if(active === true){
      return this.text = "Show Less"
    }else if(active === false){
      return this.text = "Read More"
    }else{
      return this.text = "Read More"
    }
  }

}
