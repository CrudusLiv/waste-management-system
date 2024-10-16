import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CommonModule, NgIf } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WasteCollectionComponent } from './components/waste-collection/waste-collection.component';
import { RecyclingComponent } from './components/recycling/recycling.component';
import { DisposalComponent } from './components/disposal/disposal.component';
import { ReportsComponent } from './components/reports/reports.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PickupHistoryComponent } from './components/pickup-history/pickup-history.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    NgIf,
    AdminDashboardComponent,
    DashboardComponent,
    WasteCollectionComponent,
    RecyclingComponent,
    DisposalComponent,
  ],
  template: `
    <app-navigation></app-navigation>
    <div class="main-content">
      <router-outlet></router-outlet>
    </div>
    <div class="popup-overlay" *ngIf="isPopupOpen">
      <div class="popup-content">
        <h2>{{ popupTitle }}</h2>
        <p>{{ popupMessage }}</p>
        <button (click)="closePopup()">Close</button>
      </div>
    </div>
  `,
})
export class AppComponent {
  title = 'waste-management-system';
  isPopupOpen = false;
  popupTitle = '';
  popupMessage = '';
  notifications = [
    { title: 'Upcoming Pickup', message: 'Your next pickup is scheduled for tomorrow at 10 AM.' },
    { title: 'Missed Pickup', message: 'You missed your last pickup. Please reschedule.' }
  ];

  openPopup(title: string, message: string) {
    this.isPopupOpen = true;
    this.popupTitle = title;
    this.popupMessage = message;
  }

  closePopup() {
    this.isPopupOpen = false;
  }
  

}

