import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroCardComponent } from './intro-card/intro-card.component';
import { SkillsCardComponent } from './skills-card/skills-card.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { FooterInfoComponent } from './footer-info/footer-info.component';
import { HeaderInfoComponent } from './header-info/header-info.component';
import { ProjectCardComponent } from './project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroCardComponent,
    SkillsCardComponent,
    ContactCardComponent,
    FooterInfoComponent,
    HeaderInfoComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
