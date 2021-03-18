import { Injectable } from '@angular/core';
import { mockPortfolioDescription, mockPortfolioName, mockPortfolioImgPath } from '../mock-data/mock-portfolio-owner';

@Injectable({
  providedIn: 'root'
})
export class PortfolioOwnerService {

  constructor() {

  }

  getName(){
    return mockPortfolioName;
  }

  getDescription(){
    return mockPortfolioDescription;
  }

  getImgPath(){
    return mockPortfolioImgPath;
  }
}
