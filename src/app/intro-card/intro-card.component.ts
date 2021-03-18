import { Component, OnInit } from '@angular/core';
import { PortfolioOwnerService } from '../services/portfolio-owner.service';

@Component({
  selector: 'app-intro-card',
  templateUrl: './intro-card.component.html',
  styleUrls: ['./intro-card.component.css']
})
export class IntroCardComponent implements OnInit {
  name: string;
  description: string;
  imgPath: string;

  constructor(private portfolioOwnerService: PortfolioOwnerService) {
    this.name = '';
    this.description = '';
    this.imgPath = '';
  }

  ngOnInit(): void {
    this.name = this.portfolioOwnerService.getName();
    this.description = this.portfolioOwnerService.getDescription();
    this.imgPath = this.portfolioOwnerService.getImgPath();
  }

}
