import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private apiUrl = 'http://localhost:3000/medicos';

  constructor(private http: HttpClient) { }

  getMedicos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getMedicoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createMedico(medico: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, medico);
  }

  updateMedico(id: number, medico: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, medico);
  }

  deleteMedico(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
