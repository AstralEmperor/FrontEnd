import { Component } from '@angular/core';

@Component({
  selector: 'about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.css']
})
export class AboutMeSectionComponent {

  active:boolean = false;
  textBtn:string ="Read More";
  show(active:boolean):boolean{
    return this.active = !this.active;
  }
  showText(active:boolean):string{
    if(active === true){
      console.log('if');
      return this.textBtn = "Show Less"
    }else if(active === false){
      console.log('else if');
      return this.textBtn = "Read More"
    }else{
      console.log('else');
      return this.textBtn = "Show Less"
    }
  }

}
