import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.css'],
  standalone: true,
  imports: [
   MaterialModule, 
  ]
})
export class NotificationDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}