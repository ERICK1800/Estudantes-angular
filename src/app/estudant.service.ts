import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudant } from './estudantes';

@Injectable({
  providedIn: 'root'
})
export class EstudantService {

  url = "http://localhost:3000/estudant";

  constructor(private http: HttpClient) { }

  getEstudant(): Observable<Estudant[]>{
    return this.http.get<Estudant[]>(this.url);
  }

  saveEstudant(cliente: Estudant): Observable<Estudant>{
    return this.http.post<Estudant>(this.url, cliente);
  }

  delEstudant(cliente: Estudant): Observable<void>{
    return this.http.delete<void>(this.url + "/" + cliente.id);
  }

  updateEstudant(cliente: Estudant): Observable<Estudant>{
    return this.http.put<Estudant>(this.url + "/" + cliente.id, cliente);
  }

}
