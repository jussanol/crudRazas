import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Raza } from 'src/models/raza.model';

@Injectable({
  providedIn: 'root'
})
export class RazaServiceService {

  constructor(private http: HttpClient) { }

  public obtenerRazas(): Observable<Raza[]> {
    const urlEndPoint = "http://localhost:8080/api/razas";
    return this.http.get<Raza[]>(urlEndPoint);
  }

  public obtenerRaza(idRaza: number): Observable<Raza> {
    const urlEndPoint = "http://localhost:8080/api/razas/" + idRaza;
    return this.http.get<Raza>(urlEndPoint);
  }

  public insertarRaza(raza: Raza): Observable<any> {
    const urlEndPoint = "http://localhost:8080/api/razas";
    return this.http.post<Raza>(urlEndPoint, raza);
  }

  public modificarRaza(raza: Raza): Observable<any> {
    const urlEndPoint = "http://localhost:8080/api/razas";
    return this.http.put<Raza>(urlEndPoint, raza);
  }

  public eliminarRaza(idRaza: number): Observable<Raza> {
    const urlEndPoint = "http://localhost:8080/api/razas/" + idRaza;
    return this.http.delete<Raza>(urlEndPoint);
  }
}
