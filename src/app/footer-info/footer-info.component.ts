import { Component, OnInit } from '@angular/core';
import { AuthorInfo } from '../models/author-info/author-info';
import { CreditAuthorService } from '../services/credit-author.service';
import { PortfolioOwnerService } from '../services/portfolio-owner.service';

@Component({
  selector: 'app-footer-info',
  templateUrl: './footer-info.component.html',
  styleUrls: ['./footer-info.component.css']
})
export class FooterInfoComponent implements OnInit {
  authorReferences: AuthorInfo[];
  footerText: string;

  constructor(private creditAuthorSvc: CreditAuthorService, private portfolioOwnerService: PortfolioOwnerService) {
    this.footerText = 'Footer Text';
    this.authorReferences = [];
  }

  ngOnInit(): void {
    this.authorReferences = this.creditAuthorSvc.getAuthors();
    this.footerText = `Dynamic portfolio project by ${this.portfolioOwnerService.getName()}`;
  }

}
