import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { GarageService } from './garage.service';

import { OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers : [GarageService]
  
})
export class AppComponent implements OnInit{
  title = 'GarageApp';
  cars: any[] = [];

  constructor(private garageService: GarageService){

  }

  ngOnInit(): void {
    this.garageService.getCars().subscribe(
      (datas: any) => {
        if (Array.isArray(datas)) {
          this.cars = datas;
        } else {
          console.error('Les données reçues ne sont pas un tableau', datas);
          this.cars = []; // Gérer le cas où les données ne sont pas un tableau
        }
      },
      error => {
        console.error('Erreur lors du chargement des données', error);
        this.cars = []; // Assurez-vous de réinitialiser à un tableau vide en cas d'erreur
      }
    );
}
}
