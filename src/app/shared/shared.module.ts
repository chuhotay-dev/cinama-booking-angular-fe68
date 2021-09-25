import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientRoutingModule } from '../client/client-routing.module';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoginComponent, PageNotFoundComponent],
  imports: [CommonModule, ClientRoutingModule, ReactiveFormsModule],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
