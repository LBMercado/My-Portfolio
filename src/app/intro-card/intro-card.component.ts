import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-card',
  templateUrl: './intro-card.component.html',
  styleUrls: ['./intro-card.component.css']
})
export class IntroCardComponent implements OnInit {
  name: string;
  description: string;

  constructor() {
    this.name = 'OwnerName';
    this.description = 'Description';
  }

  ngOnInit(): void {
  }

}
