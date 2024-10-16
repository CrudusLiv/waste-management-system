import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NotificationDialogComponent } from '../notification-dialog/notification-dialog.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isMenuOpen = false;

  constructor(private dialog: MatDialog) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openNotifications(): void {
    const dialogRef = this.dialog.open(NotificationDialogComponent, {
      width: '600px',
      data: {
        notifications: [
          { message: 'You have a new message.' },
          { message: 'Your profile has been updated.' }
        ],
        markAsRead: () => {},
        deleteNotification: () => {}
      }
    });
  }
}