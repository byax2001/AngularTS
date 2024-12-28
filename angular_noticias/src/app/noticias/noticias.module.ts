import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

// pages
import { HomeComponent } from './pages/home/home.component';
import { NoticiaComponent } from './pages/noticia/noticia.component';

// components
import { HeadernewsComponent } from './components/headernews/headernews.component';
import { BasePageComponent } from './components/base-page/base-page.component';
import { CardNoticiaComponent } from './components/card-noticia/card-noticia.component';
import { NoticiasRecomendadasComponent } from './components/noticias-recomendadas/noticias-recomendadas.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { NoticiasRoutingModule } from './noticias-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeadernewsComponent,
    BasePageComponent,
    CardNoticiaComponent,
    NoticiaComponent,
    NoticiasRecomendadasComponent,
    ImageCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NoticiasRoutingModule,
    HttpClientModule
  ],
  exports: [

  ]
})
export class NoticiasModule { }
