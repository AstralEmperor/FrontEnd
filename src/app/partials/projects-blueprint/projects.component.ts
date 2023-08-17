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
}
