import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from 'app/star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  //@Input() characters; no longer works as an @Input since we're using routerLink
  characters = [];
  //pass info from item thru list to tabs
  // @Output() sideAssigned = new EventEmitter<{name: string, side: string}>(); no longer needed - using services to pass side assigned
  activatedRoute: ActivatedRoute;
  swService: StarWarsService;
  loadedSide = 'all';
  subscription;

  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.swService = swService;
   }

  //ngOnInit - anything inside this method is 'hooked' into running everytime the component is initialized, kinda like componentDidMount in React
  ngOnInit() {
    // this.swService.fetchCharacters(); //this got added to the appcomponent, i.e. state was lifted up so that the characters are fetched when whole app changed, not just the list component..
    //subscriptions take three args - what you subscribe to, error, and anything you want to hook into the subscription run
    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.swService.getCharacters(params.side);
        this.loadedSide = params.side;
      }
    );
    //subscribe to the side changes in the swService:
    //if you create your own subscribable, or observable, you must cancel the subscription, or it will pollute the memory.
    this.subscription = this.swService.charactersChanged.subscribe(
      () => {
        this.characters = this.swService.getCharacters(this.loadedSide);
      }
    );
    console.log(this.characters);
  }

  //remove subscription from memory to avoid memory leaks
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  //this functionality is now in the starwars service class
  // onSideAssigned(charInfo) {
  //   this.sideAssigned.emit(charInfo);
  // }

}
