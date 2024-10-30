import { ChangeDetectionStrategy,Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-waste-collection',
  standalone: true,
  imports: [
    MaterialModule,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './waste-collection.component.html',
  styleUrl: './waste-collection.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WasteCollectionComponent implements OnInit {
  collectionForm!: FormGroup;
  
  areas = [
    { id: 'area1', name: 'Area 1 - Downtown' },
    { id: 'area2', name: 'Area 2 - Suburbs' },
    { id: 'area3', name: 'Area 3 - Industrial' },
    { id: 'area4', name: 'Area 4 - Commercial' }
  ];
  
  wasteTypes = [
    { id: 'household', name: 'Household Waste' },
    { id: 'recyclable', name: 'Recyclable Waste' },
    { id: 'hazardous', name: 'Hazardous Waste' },
    { id: 'green', name: 'Green Waste' },
    { id: 'electronic', name: 'Electronic Waste' }
  ];

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.collectionForm = this.fb.group({
      area: ['', Validators.required],
      date: ['', [Validators.required]],
      wasteType: ['', Validators.required],
      notes: ['', [Validators.maxLength(500)]]
    });
  }

  onSubmit() {
    if (this.collectionForm.valid) {
      const formData = this.collectionForm.value;
      
      // Here you would typically call your service to submit the data
      console.log('Collection scheduled:', formData);
      
      this.showSuccessMessage();
      this.resetForm();
    }
  }

  private showSuccessMessage() {
    this.snackBar.open('Collection scheduled successfully!', 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['success-snackbar']
    });
  }

  private resetForm() {
    this.collectionForm.reset();
    Object.keys(this.collectionForm.controls).forEach(key => {
      const control = this.collectionForm.get(key);
      control?.setErrors(null);
    });
  }

  // Getter methods for form controls
  get area() { return this.collectionForm.get('area'); }
  get date() { return this.collectionForm.get('date'); }
  get wasteType() { return this.collectionForm.get('wasteType'); }
  get notes() { return this.collectionForm.get('notes'); }
}
