import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PickupHistoryComponent } from './components/pickup-history/pickup-history.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule
import { MatDialogModule } from '@angular/material/dialog'; // Import MatDialogModule
import { NotificationDialogComponent } from './components/notification-dialog/notification-dialog.component';

@NgModule({
  declarations: [
    PickupHistoryComponent,
    NotificationsComponent,
    NotificationDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
    HttpClientModule,
    AdminDashboardComponent,
    MatBadgeModule,
    MatCardModule, // Add MatCardModule here
    MatButtonModule, // Add MatButtonModule here
    MatDialogModule, // Add MatDialogModule here
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
