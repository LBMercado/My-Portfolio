import { Component, OnInit } from '@angular/core';
import { SkillDisplay } from '../models/skill-display/skill-display';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.css']
})
export class SkillsCardComponent implements OnInit {
  skillDisplays: SkillDisplay[];

  constructor(private skillService: SkillsService) {
    this.skillDisplays = [];
  }

  ngOnInit(): void {
    this.skillDisplays = this.skillService.getSkills();
  }

}
