import { Component, OnInit } from '@angular/core';
import { Person } from './people.model';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PeopleService {

  private apiURL = 'https://swapi.co/api/people';
  private headers = new Headers({'Content-Type': 'application/json'});
  private results : any = {};
  private persons: Person[] = [];

  constructor(private http: Http) {}

  getPerson() : Observable<any[]> {
    return this.http.get(this.apiURL)
      .map(response => response.json() as any[])
      .catch (this.handleError);
  }

  private handleError (response : Response) : Observable<any> {
    let errorMessage = `$(response.status) - $(response.statusText)`;
    return Observable.throw(errorMessage);
  }

}
