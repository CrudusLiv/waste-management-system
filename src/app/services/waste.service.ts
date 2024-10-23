import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WasteService {
  private apiUrl = 'http://localhost:3000/api/waste';

  constructor(private http: HttpClient) { }

  getWastes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addWaste(waste: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, waste);
  }

  updateWaste(id: string, waste: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, waste);
  }

  deleteWaste(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
