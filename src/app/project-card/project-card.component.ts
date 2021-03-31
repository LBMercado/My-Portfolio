import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProjectDisplay } from '../models/project-display/project-display';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  providers: [NgbCarouselConfig]
})
export class ProjectCardComponent implements OnInit {
  projectDisplays: ProjectDisplay[];
  constructor(private projSvc: ProjectsService, carouselConf: NgbCarouselConfig) {
    this.projectDisplays = [];
    carouselConf.interval = 5000;
    carouselConf.wrap = true;
    carouselConf.pauseOnHover = false;
  }

  ngOnInit(): void {
    this.projectDisplays = this.projSvc.getProjects();
  }
}
