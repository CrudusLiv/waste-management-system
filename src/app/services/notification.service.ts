import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'http://localhost:3000/api/notifications';

  constructor(private http: HttpClient) {}

  sendNotification(notification: any): Observable<any> {
    return this.http.post(this.apiUrl, notification);
  }

  getNotifications(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${userId}`);
  }

  broadcastAnnouncement(announcement: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/broadcast`, announcement);
  }
}
