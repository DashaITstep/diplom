///<reference path="../../node_modules/@angular/router/src/router_module.d.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import {NotFoundComponent} from "./not-found/not-found.component";
import {RouterModule} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import {PhotoService} from "./shared/photo.service";
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AlbumPageComponent } from './album-page/album-page.component';
import { PhotoPageComponent } from './photo-page/photo-page.component';
import { SliderComponent } from './main-page/slider/slider.component';
import { FormsModule } from '@angular/forms';

const appRoutes = [
    {path: '', component: MainPageComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'album/:id', component: AlbumPageComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'contacts', component: ContactsComponent},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent, NotFoundComponent, PortfolioComponent, ServicesComponent, ContactsComponent, AlbumPageComponent, PhotoPageComponent, SliderComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule, FormsModule
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
