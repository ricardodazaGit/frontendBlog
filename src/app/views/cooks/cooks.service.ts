import { Injectable } from '@angular/core';
import { CookPublication } from './cook-publication';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

const cudOptions = { headers: new Headers({'Content-Type' : 'application/json'})};

@Injectable()
export class CookService {

  private url = "../../assets/api/cookPublics.json";

  private cook: CookPublication[] = [];

  constructor(private _http: Http) {}

  getCookPublicationsList$() {
    return this._http.get(`${this.url}`)
      .map( res => res.json())
      .catch(this.handleError);
  }

  getOneCookPublication$ (id: string | number){
    const url = `${this.url}/getWaitPublication/${id}`;
    return this._http.get(url)
      .map(res => res.json())
      .catch(this.handleError);
  }

  addOrUpdateCookPublication$ (cookPublication: CookPublication){
    return this._http.post(`${this.url}/saveOrUpdate`, JSON.stringify(cookPublication))
      .map(res => {
        return res.json
      })
      .catch(this.handleError);
  }

  deleteCookPublication (id: number) {
    return this._http.delete(`${this.url}/deleteCookPublication/${id}`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError (error: any) {
    console.error(error);
    return Observable.throw(error);
  }

}
