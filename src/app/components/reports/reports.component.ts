import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    MaterialModule,
    RouterLink,
  ],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {
}
