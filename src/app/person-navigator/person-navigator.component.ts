import { Component, OnInit } from '@angular/core';
import { PersonService } from '../Services/PersonService';

@Component({
  selector: 'app-person-navigator',
  templateUrl: './person-navigator.component.html',
  styleUrls: ['./person-navigator.component.css']
})
export class PersonNavigatorComponent implements OnInit {

  constructor(private personService: PersonService) { }
people: any[] | undefined;
  ngOnInit(): void {
    this.personService.findAllPeople().then(people => this.people = people);
  }

}
