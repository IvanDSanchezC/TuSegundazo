import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Vehiculo } from './vehiculo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private apiUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { }

getVehiculos(): Observable<Vehiculo[]> {
  return this.http.get<Vehiculo[]>(this.apiUrl);
}

}
