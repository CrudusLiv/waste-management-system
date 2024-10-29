import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { NotificationDialogComponent } from '../notification-dialog/notification-dialog.component';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule,
    CommonModule
  ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  
})
export class NavigationComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isMenuOpen = false;

  navItems = [
    { path: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
    { path: '/waste-collection', icon: 'local_shipping', label: 'Waste Collection' },
    { path: '/recycling', icon: 'recycling', label: 'Recycling' },
    { path: '/disposal', icon: 'delete', label: 'Disposal' },
    { path: '/reports', icon: 'assessment', label: 'Reports' },
    { path: '/admin-dashboard', icon: 'admin_panel_settings', label: 'Admin Dashboard' },
    { path: '/profile', icon: 'person', label: 'Profile' },
    { path: '/login', icon: 'login', label: 'Login' },
    { path: '/contact', icon: 'contact_support', label: 'Contact' }
  ];
  
hasNotifications: any;

  constructor(private dialog: MatDialog) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.sidenav.toggle();
  }
  

  openNotifications(): void {
    const dialogRef = this.dialog.open(NotificationDialogComponent, {
      width: '400px',
      data: {
        notifications: [
          { id: 1, message: 'New collection schedule available', type: 'info', date: new Date() },
          { id: 2, message: 'Recycling pickup tomorrow', type: 'reminder', date: new Date() },
          { id: 3, message: 'Monthly report ready', type: 'alert', date: new Date() }
        ]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.handleNotificationAction(result);
      }
    });
  }

  private handleNotificationAction(action: any) {
    // Handle notification actions
  }
}
