import { ImgInfo } from '../img-info/img-info';

export class ProjectDisplay {
  projectName: string;
  projectImgs: ImgInfo[];
  projectDescription: string;
  technologies: string[];

  constructor(projectName: string, projectImgs: ImgInfo[],
              projectDescription: string, technologies: string[]){
    this.projectName = projectName;
    this.projectImgs = projectImgs;
    this.projectDescription = projectDescription;
    this.technologies = technologies;
  }
}
