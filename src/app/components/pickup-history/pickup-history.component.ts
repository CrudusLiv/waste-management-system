import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-pickup-history',
  templateUrl: './pickup-history.component.html',
  styleUrls: ['./pickup-history.component.css'],
  standalone: true,
  imports: [
    MaterialModule,
    RouterLink,
  ]
})
export class PickupHistoryComponent implements OnInit {
  history: any[] = [];
  filteredHistory: any[] = [];
  filter = { wasteType: '', startDate: '', endDate: '' };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/api/pickup-history').subscribe(data => {
      this.history = data;
      this.filteredHistory = this.history;
    });
  }

  filterHistory() {
    this.filteredHistory = this.history.filter(pickup => {
      return (!this.filter.wasteType || pickup.wasteType === this.filter.wasteType) &&
             (!this.filter.startDate || new Date(pickup.date) >= new Date(this.filter.startDate)) &&
             (!this.filter.endDate || new Date(pickup.date) <= new Date(this.filter.endDate));
    });
  }
}
