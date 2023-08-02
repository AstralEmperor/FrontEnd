import { Component, Input } from '@angular/core';

@Component({
  selector: 'tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  @Input()
  color = 'var(--orange)'
  @Input()
  bgColor = 'var(--veryDarkGray)'
  @Input()
  text!: string;
  @Input()
  fontSize = 1;
  @Input()
  border = '3px solid var(--darkOrange)'
}
