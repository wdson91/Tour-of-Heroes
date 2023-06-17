import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroesData: any = [];
  constructor(
    private heroesService: HeroesService
  ) { }

  ngOnInit() {
    this.heroesService.getAllHeroes()
      .subscribe(data => {
        this.heroesData = data;
      })
  }
  removeHero(id: number) {
    this.heroesService.deleteHero(id)
      .subscribe(data => {
        alert(data.message);
        this.heroesData = this.heroesData.filter((hero: any) => hero.id !== id);
      })
  }
}
