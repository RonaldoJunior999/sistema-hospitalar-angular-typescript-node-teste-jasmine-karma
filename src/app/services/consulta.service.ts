import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private apiUrl = 'http://localhost:3000/consultas';

  constructor(private http: HttpClient) { }

  getConsultas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getConsultaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createConsulta(consulta: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, consulta);
  }

  updateConsulta(id: number, consulta: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, consulta);
  }

  deleteConsulta(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
