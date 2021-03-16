export class ProjectDisplay {
  projectName: string;
  projectImgUrl: string;
  projectDescription: string;

  constructor(projectName: string, projectImageUrl: string, projectDescription: string){
    this.projectName = projectName;
    this.projectImgUrl = projectImageUrl;
    this.projectDescription = projectDescription;
  }
}
