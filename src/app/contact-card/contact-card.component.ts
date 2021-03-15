import { Component, OnInit } from '@angular/core';
import { ContactDisplay } from 'models/contact-display/contact-display';


@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {
  contactDisplays: ContactDisplay[];

  constructor() {
    this.contactDisplays = [];
  }

  ngOnInit(): void {
  }

}
