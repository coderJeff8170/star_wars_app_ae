
import { Injectable } from "@angular/core";
import { LogService } from "./log.service";
import { Subject } from 'rxjs/Subject';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class StarWarsService {

  private logService: LogService;
  charactersChanged = new Subject<void>();//no payload
  http: Http;

  constructor(logService: LogService, http: Http) {
    this.logService = logService;
    this.http = http;
  }

  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vapor', side: ''}
  ];

  //add a method to reach out to web to get star wars characters
  fetchCharacters() {
    //to send a post request, second argument sends the data..
    //this.http.post('https://blah.com/stuff', {body of request})
    this.http.get('https://swapi.dev/api/people/')
      .map((response: Response) => {
        const data = response.json();
        const extractedChars = data.results;
        const chars = extractedChars.map(char => {
          return {name: char.name, side: ''};
        })
        return chars;
      })
      .subscribe(
        data => {
        // (data) => {
        //   this.characters = data.results.map(el => {
        //     return {name: el.name, side: ''}
        //   })
          this.characters = data;
          this.charactersChanged.next();
          // console.log(data.results.map(el => el.name));
        }
      );
  }

  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList
    });
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;//need to now fetch a new copy, because the side changed - use an event emitter to subscribe to..
    this.charactersChanged.next();//fetches new copy of array after detecting change in the subject
    //^^this change will come from onInit subscribe function in the list component module
    this.logService.writeLog(`Changed side of ${charInfo.name}, new side: ${charInfo.side}`);
  }

  addCharacter(character){
    const pos = this.characters.findIndex((char) => {
      return char.name === character.name;
    });
    if(pos !== -1){
      return;
    }
    this.characters.push(character);
  }
}
