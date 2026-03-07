import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillComponent } from './skill/skill.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NgIconsModule } from '@ng-icons/core';

import {
  bootstrapLinkedin,
  bootstrapGithub,
  bootstrapFiletypeJava,
} from '@ng-icons/bootstrap-icons';

import {
  simpleNestjs,
  simpleHtml5,
  simpleCss,
  simpleJavascript,
  simplePython,
  simpleMongodb,
  simpleAngular,
  simpleMysql,
  simpleDocker,
  simpleClickup,
  simpleGit,
  simpleInstagram,
  simpleGithub,
  simpleRabbitmq,
} from '@ng-icons/simple-icons';
import { ionMenuOutline, ionClose } from '@ng-icons/ionicons';

import { diNodejsPlainWordmark } from '@ng-icons/devicon/plain';
@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ContactFormComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({
      bootstrapGithub,
      bootstrapFiletypeJava,
      bootstrapLinkedin,
      simpleInstagram,
      simpleGithub,
      simpleNestjs,
      simpleHtml5,
      simpleCss,
      simpleJavascript,
      simplePython,
      simpleMongodb,
      simpleAngular,
      simpleMysql,
      simpleDocker,
      simpleClickup,
      simpleGit,
      simpleRabbitmq,
      diNodejsPlainWordmark,
      ionMenuOutline,
      ionClose,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
