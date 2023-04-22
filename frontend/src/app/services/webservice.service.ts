import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  readonly ROOT_URL;
  readonly POKEMONS_URL;
  constructor(private http: HttpClient) {
    this.ROOT_URL = "http://localhost:3000";
    this.POKEMONS_URL = "http://localhost:1234";
  }
  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }
  getP(uri: string) {
    return this.http.get(`${this.POKEMONS_URL}/${uri}`);
  }
  post(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload, { observe: 'response' });
  }
  put(uri: string, payload: Object) {
    return this.http.put(`${this.ROOT_URL}/${uri}`, payload, { observe: 'response' });
  }
  putP(uri: string, payload: Object) {
    return this.http.put(`${this.POKEMONS_URL}/${uri}`, payload, { observe: 'response' });
  }
  delete(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`, { observe: 'response' });
  }

}
