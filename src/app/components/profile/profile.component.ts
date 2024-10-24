import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { NotificationDialogComponent } from '../notification-dialog/notification-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [
    MaterialModule,
    RouterLink,
    CommonModule,
  ]
})
export class ProfileComponent implements OnInit {
  user: any;
  notifications: any[] = [];
  showNotifications = false;
  email: string = 'userabc@gmail.com';

  constructor(
    private userService: UserService, 
    private notificationService: NotificationService,
    private router: Router,
    private dialog: MatDialog // Inject MatDialog
  ) {}

  ngOnInit() {
    this.userService.getUser('currentUserId').subscribe(
      user => this.user = user,
      error => console.error('Error fetching user data', error)
    );
  }

  openNotificationsDialog() {
    const dialogRef = this.dialog.open(NotificationDialogComponent, {
      width: '400px',
      data: { notifications: this.notifications } // Pass notifications data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
