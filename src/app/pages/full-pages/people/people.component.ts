import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Person } from './people.model';
import { PeopleService } from './people.service';
import { Observable } from 'rxjs/Observable';
import { DatatableComponent } from "@swimlane/ngx-datatable/release";


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})

export class PeopleComponent implements OnInit {
  // DataTable Content Titles
  rows = [];
  temp = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;

  columns = [
      { prop: 'name', name: 'Name' },
      { prop: 'hair_color', name: 'Hair Color' },
      { prop: 'height', name: 'Height' }
  ];
  @ViewChild(DatatableComponent) table: DatatableComponent;

  persons: any[] = [];
  results : any = {};

  constructor (private peopleService : PeopleService) {
  }

  ngOnInit(): void {
    this.peopleService.getPerson()
      .subscribe (
        data => {
          this.results = data['results']

          for (let res of this.results) {
              var r = /\d+/;
              var url = res.url;
              var id = url.match(r);
              id = id[0];

              var obj = {id: id, name: res.name, hair_color: res.hair_color, height: res.height};

              this.persons.push(obj);
          }

          console.log("Teste final");
          console.log(this.persons);

          this.rows = this.persons
          this.temp = [...this.persons];
          setTimeout(() => { this.loadingIndicator = false; }, 1500);
      });
  }

  updateFilter(event) {
      const val = event.target.value.toLowerCase();

      // filter our data
      const temp = this.temp.filter(function (d) {
          return d.name.toLowerCase().indexOf(val) !== -1 || !val;
      });

      // update the rows
      this.rows = temp;
      // Whenever the filter changes, always go back to the first page
      this.table.offset = 0;
  }
}
