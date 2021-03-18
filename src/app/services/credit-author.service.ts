import { Injectable } from '@angular/core';
import { AuthorInfo } from '../models/author-info/author-info';
import { mockAuthorReferences } from '../mock-data/mock-credit-authors';

@Injectable({
  providedIn: 'root'
})
export class CreditAuthorService {
  authors: AuthorInfo[];

  constructor() {
    this.authors = mockAuthorReferences.map((author) => {
      return new AuthorInfo(author.authorName, author.source, author.websitePublisher)
    });
  }

  getAuthors(){
    return this.authors;
  }
}
