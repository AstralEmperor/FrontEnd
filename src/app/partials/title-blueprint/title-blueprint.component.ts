import { Component, Input } from '@angular/core';

@Component({
  selector: 'title-blueprint',
  templateUrl: './title-blueprint.component.html',
  styleUrls: ['./title-blueprint.component.css']
})
export class TitleBlueprintComponent {
  @Input()
  title!: string;
  @Input()
  margin? = '1.5rem 0 0 2.5rem';
  @Input()
  fontSize? = '2.5rem'
  @Input()
  color?: string;
}
