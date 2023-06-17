import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';


@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})
export class CreateHeroComponent implements OnInit {
  hero: any = {
    name: '',
    specialPower: ''
  };

  constructor(private heroesService: HeroesService) { }




  ngOnInit(): void {



  }

  onSubmit() {
    console.log(this.hero);
    this.heroesService.createHero(this.hero).subscribe((data: any) => {
      console.log(data);
      alert(data.message);
    }, (error: any) => {
      console.log(error);
      alert(error.error.message);
    });
  }

}
