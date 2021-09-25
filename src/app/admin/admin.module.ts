import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManageUserComponent } from './pages/manage-user/manage-user.component';
import { ManageMovieComponent } from './pages/manage-movie/manage-movie.component';

@NgModule({
  declarations: [AdminComponent, DashboardComponent, ManageUserComponent, ManageMovieComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
