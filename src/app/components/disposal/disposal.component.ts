import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-disposal',
  standalone: true,
  imports: [
    MaterialModule,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './disposal.component.html',
  styleUrl: './disposal.component.css'
})
export class DisposalComponent {

}
