import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';


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

  constructor(private heroesService: HeroesService, private router: Router) { }




  ngOnInit(): void {



  }

  onSubmit() {

    this.heroesService.createHero(this.hero).pipe(
      tap((data: any) => {
        if (data.message === 'Hero created successfully') {
          this.router.navigate(['/heroes']);
        }
      })
    ).subscribe(
      (data: any) => {
        console.log(data);
        alert(data.message);
      }
      ,
      (error: any) => {

        alert(error.error.message);
      }
    );

  }

}
