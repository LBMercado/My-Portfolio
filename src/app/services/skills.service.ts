import { Injectable } from '@angular/core';
import { SkillDisplay } from '../models/skill-display/skill-display';
import { mockSkills } from '../mock-data/mock-skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  constructor() {

  }

  getSkills(){
    return mockSkills.map(skill => {
      return new SkillDisplay(skill.skillName, skill.skillIconPath)
    });
  }
}
