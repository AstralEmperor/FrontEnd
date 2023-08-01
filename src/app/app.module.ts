import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './partials/header/header.component';
import { TitleSectionComponent } from './partials/home-sections/title-section/title-section.component';
import { DefaultButtonComponent } from './partials/default-button/default-button.component';
import { TitleBlueprintComponent } from './partials/title-blueprint/title-blueprint.component';
import { AboutMeSectionComponent } from './partials/home-sections/about-me-section/about-me-section.component';
import { FooterComponent } from './partials/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TitleSectionComponent,
    DefaultButtonComponent,
    TitleBlueprintComponent,
    AboutMeSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
