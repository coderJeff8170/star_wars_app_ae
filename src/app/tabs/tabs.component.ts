import { Component, OnInit } from '@angular/core';
//import { StarWarsService } from 'app/star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  // characters = [];
  // chosenList = 'all';
  // swService: StarWarsService;

  constructor() {
    // this.swService = swService;
  }

  ngOnInit() {
  }

  // onChoose(side) {
  //   this.chosenList = side;
  // }

  // getCharacters() {
  //   if (this.chosenList === 'all') {
  //     return this.characters.slice();
  //   }
  //   return this.characters.filter((char) => {
  //     return char.side === this.chosenList
  //   });
  // }

  // //here, we make sure the sidechosen is lifted up to the tabs component, and changed in the original characters array state.
  // onSideChosen(charInfo) {
  //   const pos = this.characters.findIndex((char) => {
  //     return char.name === charInfo.name;
  //   });
  //   this.characters[pos].side = charInfo.side;
  // }
  // getCharacters() {
  //   // const swService = new StarWarsService();
  //   this.characters = this.swService.getCharacters(this.chosenList);
  //   return this.characters;
  // }
  // ^^ no longer needed because the swService is taking care of getCharacters

}
