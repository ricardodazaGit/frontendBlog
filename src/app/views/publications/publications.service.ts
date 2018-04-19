import { Injectable } from '@angular/core';
import { Publication } from './publication';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/observable/throw'; // se utiliza para capturar excepciones
import 'rxjs/add/operator/catch'; // se utiliza para capturar excepciones
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

const cudOptions = { headers: new Headers({'Content-Type' : 'application/json'})};

@Injectable()
export class PublicationsService {

  private url = "http://localhost:8080";

  private publications: Publication[] = [];

  constructor(private _http: Http) {}

  getPublicationsList$() {
    return this._http.get(`${this.url}/getPublications`)
      .map( res => res.json())
      .catch(this.handleError);
  }

  getOnePublication$ (id: string | number){
    const url = `${this.url}/getPublication/${id}`;
    return this._http.get(url)
      .map(res => res.json())
      .catch(this.handleError);
  }

  addOrUpdatePublication$ (publication: Publication){
    return this._http.post(`${this.url}/saveOrUpdate`, JSON.stringify( publication ))
      .map(res => {
        return res.json
      })
      .catch(this.handleError);
  }

  deletePublication (id: number) {
    return this._http.delete(`${this.url}/deletePublication/${id}`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError (error: any) {
    console.error(error);
    return Observable.throw(error);
  }

}
