import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PickupHistoryComponent } from './components/pickup-history/pickup-history.component';
import { MaterialModule } from './material.module';
import { NotificationDialogComponent } from './components/notification-dialog/notification-dialog.component';
import { AppComponent } from './app.component';
import { WasteCollectionComponent } from './components/waste-collection/waste-collection.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisposalComponent } from './components/disposal/disposal.component';


@NgModule({
  declarations: [
  ],
  imports: [
    NoopAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    ContactComponent,
    DashboardComponent,
    DisposalComponent,
    LoginComponent,
    HttpClientModule, // Use HttpClientModule instead of HttpClient
    AdminDashboardComponent,
    MaterialModule,
    NotificationDialogComponent,
    PickupHistoryComponent,
    WasteCollectionComponent,

    AppComponent, // Import AppComponent instead of declaring it
  ],
  providers: [
    provideHttpClient(withFetch()), // Ensure fetch is enabled
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
