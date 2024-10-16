import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WasteCollectionComponent } from './components/waste-collection/waste-collection.component';
import { RecyclingComponent } from './components/recycling/recycling.component';
import { DisposalComponent } from './components/disposal/disposal.component';
import { ReportsComponent } from './components/reports/reports.component';
import { LoginComponent } from './components/login/login.component'; // Add this import
import { ProfileComponent } from './components/profile/profile.component'; // Add this import
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component'; // Add this import


export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'waste-collection', component: WasteCollectionComponent },
  { path: 'recycling', component: RecyclingComponent },
  { path: 'disposal', component: DisposalComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'login', component: LoginComponent }, // Add this route
  { path: 'profile', component: ProfileComponent }, // Add this route
  { path: 'admin', component: AdminDashboardComponent }, // Add this route
];
