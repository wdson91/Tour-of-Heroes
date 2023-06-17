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
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    CreateHeroComponent,
    EditHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
