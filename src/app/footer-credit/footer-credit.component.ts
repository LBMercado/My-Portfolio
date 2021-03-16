import { Component, Input, OnInit } from '@angular/core';
import { AuthorInfo } from 'models/author-info/author-info';

@Component({
  selector: 'app-footer-credit',
  templateUrl: './footer-credit.component.html',
  styleUrls: ['./footer-credit.component.css']
})
export class FooterCreditComponent implements OnInit {
  @Input() author: AuthorInfo;

  constructor() {
    this.author = new AuthorInfo('', '', '');
  }

  ngOnInit(): void {
  }

}
