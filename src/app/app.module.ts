import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PickupHistoryComponent } from './components/pickup-history/pickup-history.component';
import { MaterialModule } from './material.module';
import { NotificationDialogComponent } from './components/notification-dialog/notification-dialog.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule, // Use HttpClientModule instead of HttpClient
    AdminDashboardComponent,
    MaterialModule,
    NotificationDialogComponent,
    PickupHistoryComponent,
    AppComponent, // Import AppComponent instead of declaring it
  ],
  providers: [
    provideHttpClient(withFetch()), // Ensure fetch is enabled
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
