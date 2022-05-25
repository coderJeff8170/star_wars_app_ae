import { Component, Input, OnInit } from '@angular/core';
import { StarWarsService } from 'app/star-wars.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() character;
  //pass character with side assigned upward in component chain, in this case to list component
  // @Output() sideAssigned = new EventEmitter<{name: string, side: string}>(); no longer needed, b/c using services (no data being passed to parent)
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
      this.swService = swService;
   }

  ngOnInit() {
  }

  onAssign(side) {
    // this.character.side = side; <- this is sub optimal, b/c parent components may wish to have this info ('lift state up', in React)
    // this.sideAssigned.emit({name: this.character.name, side: side});
    // const swService = new StarWarsService();
    this.swService.onSideChosen({name: this.character.name, side: side});
  }

}
