import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkillComponent,
    ContactFormComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
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
  providers: [provideClientHydration(withEventReplay())],
  bootstrap: [AppComponent],
})
export class AppModule {}
