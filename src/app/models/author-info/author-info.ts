export class AuthorInfo {
  name: string;
  sourceLink: string;
  pubWebsite: string;

  constructor(name: string, source: string, pubWebsite: string){
    this.name = name;
    this.sourceLink = source;
    this.pubWebsite = pubWebsite;
  }
}
