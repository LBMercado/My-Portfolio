import { Injectable } from '@angular/core';
import { mockPortfolioDescription, mockPortfolioName, mockPortfolioImgPath } from '../mock-data/mock-portfolio-owner';

@Injectable({
  providedIn: 'root'
})
export class PortfolioOwnerService {
  name: string;
  description: string;
  imgPath: string;

  constructor() {
    this.name = mockPortfolioName;
    this.description = mockPortfolioDescription;
    this.imgPath = mockPortfolioImgPath;
  }

  getName(){
    return this.name;
  }

  getDescription(){
    return this.description;
  }

  getImgPath(){
    return this.imgPath;
  }
}
