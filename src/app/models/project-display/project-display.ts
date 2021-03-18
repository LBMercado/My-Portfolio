export class ProjectDisplay {
  projectName: string;
  projectImgUrl: string;
  projectDescription: string;
  technologies: string[];

  constructor(projectName: string, projectImageUrl: string, projectDescription: string, technologies: string[]){
    this.projectName = projectName;
    this.projectImgUrl = projectImageUrl;
    this.projectDescription = projectDescription;
    this.technologies = [];
  }
}
