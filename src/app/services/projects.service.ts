import { Injectable } from '@angular/core';
import { ProjectDisplay } from '../models/project-display/project-display';
import { mockProjects } from '../mock-data/mock-projects'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() {

  }

  getProjects(){
    return mockProjects.map((p => {
      return new ProjectDisplay(p.name, p.imgUrls, p.description, p.technologies);
    }));
  }
}
