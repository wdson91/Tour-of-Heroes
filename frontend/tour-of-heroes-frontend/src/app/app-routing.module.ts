import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { CreateHeroComponent } from './create-hero/create-hero.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'create-hero', component: CreateHeroComponent },
  { path: 'edit-hero/:id', component: EditHeroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
