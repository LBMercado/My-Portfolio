import { Component, OnInit } from '@angular/core';
import { AuthorInfo } from '../../../models/author-info/author-info';
import { CreditAuthorService } from '../credit-author.service';

@Component({
  selector: 'app-footer-info',
  templateUrl: './footer-info.component.html',
  styleUrls: ['./footer-info.component.css']
})
export class FooterInfoComponent implements OnInit {
  authorReferences: AuthorInfo[];
  footerText: string;

  constructor(private creditAuthorSvc: CreditAuthorService) {
    this.footerText = 'This is a sample footer.';
    this.authorReferences = [];
  }

  ngOnInit(): void {
    this.authorReferences = this.creditAuthorSvc.getAuthors();
  }

}
