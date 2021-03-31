import { Injectable } from '@angular/core';
import { ProjectDisplay } from '../models/project-display/project-display';
import { mockProjects } from '../mock-data/mock-projects'
import { ImgInfo } from '../models/img-info/img-info';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() {

  }

  getProjects(){
    return mockProjects.map((p => {
      return new ProjectDisplay(p.name, p.imgs.map(img => new ImgInfo(img.imgUrl, img.imgDesc)), p.description, p.technologies);
    }));
  }
}
