import { Injectable } from '@angular/core';
import { WaitPublication } from './wait-publication';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

const cudOptions = { headers: new Headers({'Content-Type' : 'application/json'})};

@Injectable()
export class WaitsService {

  private url = "../../assets/api/waitPublics.json";

  private waits: WaitPublication[] = [];

  constructor(private _http: Http) {}

  getWaitPublicationsList$() {
    return this._http.get(`${this.url}`)
      .map( res => res.json())
      .catch(this.handleError);
  }

  getOneWaitPublication$ (id: string | number){
    const url = `${this.url}/getWaitPublication/${id}`;
    return this._http.get(url)
      .map(res => res.json())
      .catch(this.handleError);
  }

  addOrUpdateWaitPublication$ (waitPublication: WaitPublication){
    return this._http.post(`${this.url}/saveOrUpdate`, JSON.stringify(waitPublication))
      .map(res => {
        return res.json
      })
      .catch(this.handleError);
  }

  deleteWaitPublication (id: number) {
    return this._http.delete(`${this.url}/deleteWaitPublication/${id}`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError (error: any) {
    console.error(error);
    return Observable.throw(error);
  }

}
