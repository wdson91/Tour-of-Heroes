import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { CreateHeroComponent } from './create-hero/create-hero.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RankingComponent } from './ranking/ranking.component';
import { DetailHeroComponent } from './detail-hero/detail-hero.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    CreateHeroComponent,
    EditHeroComponent,
    RankingComponent,
    DetailHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
