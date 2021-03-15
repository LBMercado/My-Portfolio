import { Component, OnInit } from '@angular/core';
import { ProjectDisplay } from 'models/project-display/project-display';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  projectDisplays: ProjectDisplay[];

  constructor() {
    this.projectDisplays = [];
  }

  ngOnInit(): void {
  }

}
