import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { CreateHeroComponent } from './create-hero/create-hero.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { RankingComponent } from './ranking/ranking.component';
import { DetailHeroComponent } from './detail-hero/detail-hero.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'create-hero', component: CreateHeroComponent },
  { path: 'edit-hero/:id', component: EditHeroComponent },
  { path: 'detail-hero/:id', component: DetailHeroComponent },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'ranking', component: RankingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
