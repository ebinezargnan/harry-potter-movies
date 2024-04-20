import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../model/movie';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MovieFilterPipe } from '../pipes/movie-filter.pipe';
import { TimeToHourMinutePipe } from '../pipes/time-to-hour-minute.pipe';
import { CurrencyFormatterPipe } from '../pipes/currency-formatter.pipe';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    FormsModule,
    MovieFilterPipe,
    TimeToHourMinutePipe,
    CurrencyFormatterPipe,
  ],
})
export class MovieListComponent implements OnInit {
  movieList: Movie[] = [];
  title: string = '';
  releaseYear: number | undefined;

  constructor(private movieService: MovieService) { }

  getMovieList() {
    this.movieService.getMovieList().subscribe(
      (data) => {
        this.movieList = data;
      }
    );
  }

  ngOnInit(): void {
    this.getMovieList();
  }
}
