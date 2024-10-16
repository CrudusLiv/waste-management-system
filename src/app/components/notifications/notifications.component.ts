import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationDialogComponent } from '../notification-dialog/notification-dialog.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  notifications = [
    // Sample notifications
    { title: 'New Message', message: 'You have received a new message.', date: new Date() },
    { title: 'Update Available', message: 'A new update is available for your app.', date: new Date() }
  ];

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(NotificationDialogComponent, {
      width: '600px',
      data: {
        notifications: this.notifications,
        markAsRead: this.markAsRead.bind(this),
        deleteNotification: this.deleteNotification.bind(this)
      }
    });
  }

  markAsRead(notification: any): void {
    // Logic to mark notification as read
    console.log('Marked as read:', notification);
  }

  deleteNotification(notification: any): void {
    // Logic to delete notification
    console.log('Deleted notification:', notification);
  }
}