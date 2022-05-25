import { Component, OnInit, Input } from '@angular/core';
import { StarWarsService } from 'app/star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  availableSides = [
    { display: 'None', value: '' },
    { display: 'Light', value: 'light' },
    { display: 'Dark', value: 'dark' }
  ];

  @Input() defaultName = 'Darth';

  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
 }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    console.log(submittedForm.value.name);
    if(submittedForm.invalid){
      return;
    }
    let newCharacter = {name: submittedForm.value.name, side: submittedForm.value.side}
    this.swService.addCharacter(newCharacter);
    this.defaultName='';
  }

}
