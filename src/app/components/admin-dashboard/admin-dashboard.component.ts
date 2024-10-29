import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    MaterialModule,
    RouterLink,
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  selectedReport: string = 'recycling-stats';
  
  chartData = {
    plastic: { value: 60, color: '#4caf50' },
    glass: { value: 40, color: '#2196f3' },
    metal: { value: 30, color: '#ff9800' },
    paper: { value: 50, color: '#e91e63' },
    others: { value: 70, color: '#9c27b0' }
  };

  reportTypes = [
    { value: 'pickup-history', label: 'Pickup History', icon: 'history' },
    { value: 'recycling-stats', label: 'Recycling Statistics', icon: 'bar_chart' },
    { value: 'issue-reports', label: 'Issue Reports', icon: 'report_problem' }
  ];

  ngOnInit() {
    this.initializeReports();
  }

  initializeReports() {
    // Initialize reports data
  }

  onReportTypeChange(reportType: string) {
    this.selectedReport = reportType;
    this.loadReportData(reportType);
  }

  loadReportData(reportType: string) {
    // Load specific report data based on type
  }

  downloadReport() {
    // Handle report download
  }

  shareReport() {
    // Handle report sharing
  }

  getChartBarStyle(value: number) {
    return {
      height: `${value}%`
    };
  }
}