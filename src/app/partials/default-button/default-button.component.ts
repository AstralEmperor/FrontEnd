import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.css']
})
export class DefaultButtonComponent {
  @Input()
  type: 'submit' | 'button' = 'button';
  @Input()
  text!: string;
  @Input()
  bgColor = 'var(--orange)'
  @Input()
  color = 'var(--white)'
  @Input()
  fontSize = 1.3;
  @Input()
  section?:string;
  
  public goTo(section: string){
    window.location.hash =''
    window.location.hash = section
  }
}
