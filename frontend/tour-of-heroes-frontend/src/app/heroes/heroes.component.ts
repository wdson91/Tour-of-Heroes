import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Hero } from '../../../../../backend/tour-of-heroes/src/heroes/entities/hero.entity';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public paginaAtual = 1;
  heroesData: any = [];
  filteredHeroes: Hero[] = [];
  searchText: string = '';

  constructor(
    private heroesService: HeroesService
  ) { }

  ngOnInit() {
    this.heroesService.getAllHeroes()
      .subscribe(data => {
        this.heroesData = data;
        this.heroesData.sort((a: any, b: any) => a.name.localeCompare(b.name));
        this.filteredHeroes = this.heroesData;

      })
  }
  filterHeroes() {

    this.heroesData = this.heroesData.filter((hero: { name: string; specialPower: string; }) =>
      hero.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      hero.specialPower.toLowerCase().includes(this.searchText.toLowerCase())
    );
    if (this.searchText === '') {
      this.heroesData = this.filteredHeroes;
    }
  }
  removeHero(id: number) {
    this.heroesService.deleteHero(id)
      .subscribe(data => {
        alert(data.message);
        this.heroesData = this.heroesData.filter((hero: any) => hero.id !== id);
      })
  }
}
