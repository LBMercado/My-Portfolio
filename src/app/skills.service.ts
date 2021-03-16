import { Injectable } from '@angular/core';
import { SkillDisplay } from '../../models/skill-display/skill-display';
import { mockSkills } from './mock-skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: SkillDisplay[];
  constructor() {
    this.skills = mockSkills.map(skill => {
      return new SkillDisplay(skill.skillName, skill.skillIconPath)
    });
    console.log(this.skills);
  }

  getSkills(){
    return this.skills;
  }
}
