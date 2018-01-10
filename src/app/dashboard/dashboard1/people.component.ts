import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

class Person {
  id: number;
  name: string;
  hair_color: string;
  height: string;
  url : number;
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})

export class PeopleComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  persons: Person[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  private apiURL = 'https://swapi.co/api/people';

  data : any = {};

  constructor(private http: Http) {
    this.getData();
    this.getImages();
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 20
    };
    //this.getData();
    //this.getImages();
    /*this.http.get(this.apiURL)
     .map(this.extractData)
     .subscribe(persons => {
       this.persons = persons;
       // Calling the DT trigger to manually render the table
       this.dtTrigger.next();
     });*/
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

  getData () {
      return this.http.get(this.apiURL)
        .map((res: Response) => res.json())
    }

    getImages () {
      this.getData().subscribe(data => {

        this.data = data

        data.results.forEach(element => {

            //gambiarra para extrair a url
            var r = /\d+/;
            var url = element.url;
            var id = url.match(r);
            id = id[0];
            console.log(id);

            var obj = {id: id, name: element.name, hair_color: element.hair_color, height: element.height, url: element.url};

            this.persons.push(obj);
        });

        console.log(this.persons);
        this.dtTrigger.next();

      })
    }
}
