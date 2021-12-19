import { Injectable } from "@angular/core";

@Injectable()
export class PersonService{
findAllPeople = () => fetch('http://finalexam-env.eba-vhpm3p2r.us-east-2.elasticbeanstalk.com/api/person').then(response => response.json())
}