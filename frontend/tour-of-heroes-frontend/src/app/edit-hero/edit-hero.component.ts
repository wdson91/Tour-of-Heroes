import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../../../backend/tour-of-heroes/src/heroes/entities/hero.entity';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../heroes.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {

  heroId: any = 0;
  hero: any = {

    name: '',
    specialPower: ''
  };
  constructor(private router: Router, private route: ActivatedRoute, private heroesService: HeroesService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.heroId = id ? +id : null;

    this.heroesService.getOneHero(this.heroId).subscribe((data: any) => {

      this.hero = data;
    }, (error: any) => {
      console.log(error);
      alert(error.error.message);
    });


  }

  async onSubmit() {
    this.heroesService.updateHero(this.heroId, this.hero)
      .pipe(
        finalize(() => {
          this.router.navigate(['/heroes']);
        })
      )
      .subscribe(
        (data: any) => {

          alert(data.message);
        },
        (error: any) => {
          console.log(error);
          alert(error.error.message);
        }
      );

  }

}
