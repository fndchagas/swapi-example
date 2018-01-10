import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  id : number;
  private sub: any;

  data : any = {};

  constructor(private http: Http, private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.getData();
    this.getImages();
  }

  ngOnInit(): void {
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

  getData () {
      let apiUrl = "https://swapi.co/api/people/" + this.id;
      return this.http.get(apiUrl)
        .map((res: Response) => res.json())
  }

  getImages () {
      this.getData().subscribe(data => {
        console.log(data);
        this.data = data
      })
  }

}
