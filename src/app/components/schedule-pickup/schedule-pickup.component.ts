import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MaterialModule } from '../../material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-schedule-pickup',
  templateUrl: './schedule-pickup.component.html',
  styleUrls: ['./schedule-pickup.component.css'],
  standalone: true,
  imports: [
    MaterialModule,
    RouterLink,
  ]
})
export class SchedulePickupComponent {
  pickupForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.pickupForm = this.fb.group({
      area: ['', Validators.required],
      personInCharge: ['', Validators.required],
      wasteType: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  schedulePickup() {
    if (this.pickupForm.valid) {
      this.http.post('http://localhost:3000/api/schedule-pickup', this.pickupForm.value).subscribe(response => {
        console.log('Pickup scheduled successfully', response);
      }, error => {
        console.log('Error scheduling pickup', error);
      });
    }
  }
}
