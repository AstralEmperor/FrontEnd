import { Component, Input } from '@angular/core';

@Component({
  selector: 'project',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  @Input()
  linkGitHub!:string;
  @Input()
  linkLiveView!:string;
  @Input()
  image!:string;
  @Input()
  alt!:string;
  @Input()
  name!:string;
  @Input()
  text!:string;
  @Input()
  color = 'var(--orange)'
  @Input()
  bgColor = 'var(--veryDarkGray)'
  @Input()
  tagName!: string;
  @Input()
  tagName2?:string;
  @Input()
  tagName3?:string;
  @Input()
  tagName4?:string;
  @Input()
  tagName5?:string;
  @Input()
  fontSize = 1;

}
