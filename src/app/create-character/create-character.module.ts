import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { CreateCharacterComponent } from "../create-character/create-character.component";
// import { CreateCharacterComponent } from "./create-character.component";


//set up anything that makes up this feature
//modules have the advantage of only loading code when it is needed
@NgModule({
  declarations: [
    CreateCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: CreateCharacterComponent }
    ]),
  ]

})
export class CreateCharacterModule {

}

