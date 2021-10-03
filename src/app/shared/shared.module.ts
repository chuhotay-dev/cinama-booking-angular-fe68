import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientRoutingModule } from '../client/client-routing.module';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormatDataPipe } from './pipes/format-data.pipe';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoginComponent, PageNotFoundComponent, FormatDataPipe],
  imports: [CommonModule, ClientRoutingModule, ReactiveFormsModule],
  exports: [HeaderComponent, FooterComponent, FormatDataPipe],
})
export class SharedModule {}
