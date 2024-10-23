import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { MaterialModule } from '../../material.module';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    RouterLink,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Process the form (send data, display confirmation, etc.)
      console.log(this.contactForm.value);
    }
  }
}
