import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Infant } from '../infant'
@Component({
  selector: 'app-infants',
  templateUrl: './infants.component.html',
  styleUrls: ['./infants.component.css']
})
export class InfantsComponent implements OnInit {
  infants;
  url = 'http://localhost:3000/selectInfants';
  constructor(
    private http: HttpClient) { }

    ngOnInit(): void {
      this.getInfants();
      console.log(this.infants);
    }


    getInfants(){
      this.http.get(this.url).subscribe(infants => this.infants = infants);
    }
}


