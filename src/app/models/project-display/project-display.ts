export class ProjectDisplay {
  projectName: string;
  projectImgUrls: string[];
  projectDescription: string;
  technologies: string[];

  constructor(projectName: string, projectImageUrls: string[], projectDescription: string, technologies: string[]){
    this.projectName = projectName;
    this.projectImgUrls = projectImageUrls;
    this.projectDescription = projectDescription;
    this.technologies = technologies;
  }
}
