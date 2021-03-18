import { Component, OnInit } from '@angular/core';
import { ContactDisplay } from '../models/contact-display/contact-display';
import { ContactsService } from '../services/contacts.service';


@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {
  contactDisplays: ContactDisplay[];

  constructor(private contactSvc: ContactsService) {
    this.contactDisplays = [];
  }

  ngOnInit(): void {
    this.contactDisplays = this.contactSvc.getContacts();
  }

}
