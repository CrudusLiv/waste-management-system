import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WasteCollectionComponent } from './components/waste-collection/waste-collection.component';
import { RecyclingComponent } from './components/recycling/recycling.component';
import { DisposalComponent } from './components/disposal/disposal.component';
import { ReportsComponent } from './components/reports/reports.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PickupHistoryComponent } from './components/pickup-history/pickup-history.component';
import { NotificationsComponent } from './components/notifications/notifications.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'waste-collection', component: WasteCollectionComponent },
  { path: 'recycling', component: RecyclingComponent },
  { path: 'disposal', component: DisposalComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'pickup-history', component: PickupHistoryComponent },
  { path: 'notifications', component: NotificationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }