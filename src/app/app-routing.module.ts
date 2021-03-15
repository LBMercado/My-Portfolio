import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { IntroCardComponent } from './intro-card/intro-card.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { SkillsCardComponent } from './skills-card/skills-card.component';

const routes: Routes = [
  {
    path: 'home',
    component: IntroCardComponent
  },
  {
    path: 'skills',
    component: SkillsCardComponent
  },
  {
    path: 'contact',
    component: ContactCardComponent
  },
  {
    path: 'project',
    component: ProjectCardComponent
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
