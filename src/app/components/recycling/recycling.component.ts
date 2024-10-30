import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recycling',
  standalone: true,
  imports: [
    MaterialModule,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './recycling.component.html',
  styleUrl: './recycling.component.css'
})
export class RecyclingComponent {
recyclingRate: unknown;

}
