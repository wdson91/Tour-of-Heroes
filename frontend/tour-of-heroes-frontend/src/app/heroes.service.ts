import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  private baseURL = `http://localhost:3000/heroes`;


  getAllHeroes(): Observable<any> {
    return this.http.get(`${this.baseURL}`)
  }
  getOneHero(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`)
  }
  createHero(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}`, data)
  }
  updateHero(id: number, data: any): Observable<any> {
    return this.http.patch(`${this.baseURL}/${id}`, data)
  }
  deleteHero(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`)
  }

}
