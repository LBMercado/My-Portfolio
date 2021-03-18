import { Injectable } from '@angular/core';
import { mockContacts } from '../mock-data/mock-contact';
import { ContactDisplay } from '../models/contact-display/contact-display';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  getContacts(){
    return mockContacts.map(con => {
      return new ContactDisplay(con.name, con.iconUrl, con.site);
    });
  }
}
