import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../heroes.service';
import { Hero } from '../model/hero.model';

@Component({
  selector: 'app-detail-hero',
  templateUrl: './detail-hero.component.html',
  styleUrls: ['./detail-hero.component.css']
})
export class DetailHeroComponent implements OnInit {
  viewCount: number = 0;

  constructor(private router: Router, private route: ActivatedRoute, private heroesService: HeroesService) { }


  hero: Hero = {
    id: 0,
    name: '',
    specialPower: ''
  };

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.hero.id = +id;
    }

    this.heroesService.getOneHero(this.hero.id).subscribe((data: any) => {
      console.log(data);
      this.hero = data;
    }, (error: any) => {
      this.router.navigate(['/heroes']);
      alert(error.error.message);
    });

  }


}
