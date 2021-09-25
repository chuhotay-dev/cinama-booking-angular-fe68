import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { HomeComponent } from './pages/home/home.component';
import { TheaterComponent } from './pages/theater/theater.component';
import { ReviewComponent } from './pages/review/review.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ClientRoutingModule } from './client-routing.module';

@NgModule({
  declarations: [
    ClientComponent,
    HomeComponent,
    TheaterComponent,
    ReviewComponent,
    ContactComponent
  ],
  imports: [CommonModule, ClientRoutingModule],
})
export class ClientModule {}
