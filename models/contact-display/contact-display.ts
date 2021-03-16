export class ContactDisplay {
  contactName: string;
  contactIconUrl: string;
  siteUrl: string;

  constructor(contactName: string, contactIconUrl: string, siteUrl: string){
    this.contactName = contactName;
    this.contactIconUrl = contactIconUrl;
    this.siteUrl = siteUrl;
  }
}
