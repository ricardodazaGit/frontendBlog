import { Injectable } from '@angular/core';
import { Publication } from './publication';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/throw'; // se utiliza para capturar excepciones
import 'rxjs/add/operator/catch'; // se utiliza para capturar excepciones
import { Observable } from 'rxjs/Observable';

const cudOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

@Injectable()
export class PublicationsService {

  private url = "http://localhost:8080";

  private publications: Publication[] = [];

  constructor(private http: HttpClient) {}

  getPublicationsList$(): Observable<Publication[]> {
    return this.http.get<Publication[]>(this.url + "/getPublications")
      .catch(this.handleError);
  }

  getOnePublication$ (id: string | number): Observable<Publication>{
    const url = `${this.url}/${id}`;
    return this.http.get<Publication>(url)
      .catch(this.handleError);
  }

  addOrUpdatePublication$ (publication: Publication): Observable<Publication>{
    const newPublic = Object.assign({}, publication); // Convertimos la clase user en un objeto
    return this.http.post<Publication>(this.url + "/saveOrUpdate", newPublic, cudOptions)
      .catch(this.handleError);
  }

  deletePublication (publication: Publication | number): Observable<Publication> {
    return this.http.post<Publication>(this.url + "/deletePublication", cudOptions)
      .catch(this.handleError);
  }

  private handleError (error: any) {
    console.error(error);
    return Observable.throw(error);
  }

}
