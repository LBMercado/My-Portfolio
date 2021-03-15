import { Component, OnInit } from '@angular/core';
import { SkillDisplay } from 'models/skill-display/skill-display';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.css']
})
export class SkillsCardComponent implements OnInit {
  skillDisplays: SkillDisplay[];

  constructor() {
    this.skillDisplays = [];
  }

  ngOnInit(): void {
  }

}
