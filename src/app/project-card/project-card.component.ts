import { Component, OnInit } from '@angular/core';
import { ProjectDisplay } from '../models/project-display/project-display';
import { ProjectsService } from '../services/projects.service'

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  projectDisplays: ProjectDisplay[];
  imgIndex: number;

  constructor(private projSvc: ProjectsService) {
    this.projectDisplays = [];
    this.imgIndex = 0;
  }

  ngOnInit(): void {
    this.projectDisplays = this.projSvc.getProjects();
  }

}
