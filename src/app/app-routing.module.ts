import { NgModule } from "@angular/core";

import { TabsComponent } from "./tabs/tabs.component";
import { ListComponent } from './list/list.component';
import { RouterModule } from "@angular/router";

//routes point to each url path, and can have child routes, added as a third param
//paths in child routes are relative to their parent routes
//the second argument either redirects to a new path or loads a component directly
const routes = [
  { path: 'characters', component: TabsComponent, children: [
    { path: '', redirectTo: 'all', pathMatch: 'full'},//redirect any path that doesn't directly use the side after /characters
    { path: ':side', component: ListComponent }
  ] },
  //{ path: 'new-character', component: CreateCharacterComponent },//before character component became a module
  { path: 'new-character', loadChildren: './create-character/create-character.module.ts#CreateCharacterModule' },
  { path: '**', redirectTo: '/characters' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
