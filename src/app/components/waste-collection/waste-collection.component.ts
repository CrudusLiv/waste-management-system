import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-waste-collection',
  standalone: true,
  imports: [
    MaterialModule,
    RouterLink,
  ],
  templateUrl: './waste-collection.component.html',
  styleUrl: './waste-collection.component.css'
})
export class WasteCollectionComponent {

}
