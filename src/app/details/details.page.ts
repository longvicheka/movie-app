import { Component, inject, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { MovieResult } from '../services/interface';
import { addIcons } from 'ionicons';
import { cashOutline, calendarOutline } from 'ionicons/icons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonText, IonButtons, IonBackButton, IonItem, IonLabel } from '@ionic/angular/standalone';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonToolbar, IonHeader, IonTitle, IonContent, IonIcon, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonText, IonButtons, IonBackButton, IonItem, IonLabel, CurrencyPipe, DatePipe
  ]
})
export class DetailsPage implements OnInit {
  private movieService = inject(MovieService);
  public imageBaseUrl = 'https://image.tmdb.org/t/p';
  public movie: WritableSignal<MovieResult | null> = signal(null);

  @Input()
  set id(movieId: string) {
    this.movieService.getMovieDetails(movieId).subscribe((movie) => {
      console.log(movie);

      this.movie.set(movie);
    });
  }
  constructor() {
    addIcons({ cashOutline, calendarOutline });
  }

  ngOnInit() {
  }

}
