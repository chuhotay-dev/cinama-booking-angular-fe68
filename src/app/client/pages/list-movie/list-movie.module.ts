import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListMovieRoutingModule } from './list-movie-routing.module';
import { ListMovieComponent } from './list-movie.component';
import { MovieComponent } from './movie/movie.component';
import { PopupComponent } from './popup/popup.component';


@NgModule({
  declarations: [
    ListMovieComponent,
    MovieComponent,
    PopupComponent
  ],
  imports: [
    CommonModule,
    ListMovieRoutingModule
  ]
})
export class ListMovieModule { }
