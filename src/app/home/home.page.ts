import { Component, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  InfiniteScrollCustomEvent,
  IonList,
  IonItem,
  IonAvatar,
  IonSkeletonText,
  IonAlert,
} from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';
import { catchError, finalize } from 'rxjs';
import { MovieResult } from '../services/interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonAlert,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonAvatar,
    IonSkeletonText,
  ],
})
export class HomePage {
  private movieService = inject(MovieService);
  public currentPage = 1;
  public error = null;
  public isLoading = false;
  public imageBaseUrl = 'https//image.tmdb.org/t/p';
  public movies: MovieResult[] = [];
  public movieArray = new Array(5);

  constructor() {
    this.loadMovies();
  }

  loadMovies(event?: InfiniteScrollCustomEvent) {
    this.error = null;

    if (!event) {
      this.isLoading = true;
    }

    this.movieService
      .getTopRatedMovies(this.currentPage)
      .pipe(
        finalize(() => {
          this.isLoading = false;
          if (event) {
            event.target.complete();
          }
        }),
        catchError((err: any) => {
          console.error(err);

          this.error = err.error.status_message;
          return [];
        })
      )
      .subscribe({
        next: (result) => {
          this.movies.push(...result.results);
          if (event) {
            event.target.disabled = result.total_pages === this.currentPage;
          }
        },
      });
  }

  loadMore(event: InfiniteScrollCustomEvent) {}
}
