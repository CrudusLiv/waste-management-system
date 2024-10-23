import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-disposal',
  standalone: true,
  imports: [
    MaterialModule,
    RouterLink,
  ],
  templateUrl: './disposal.component.html',
  styleUrl: './disposal.component.css'
})
export class DisposalComponent {

}
