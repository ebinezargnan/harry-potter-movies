import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { MovieDetail } from '../model/moviedetail';
import { TimeToHourMinutePipe } from "../pipes/time-to-hour-minute.pipe";
import { CurrencyFormatterPipe } from '../pipes/currency-formatter.pipe';

@Component({
  selector: 'app-movie',
  standalone: true,
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
  imports: [TimeToHourMinutePipe, CurrencyFormatterPipe]
})
export class MovieComponent implements OnInit {
  movie_id: string = '';
  movie: MovieDetail = {
    id: '',
    title: '',
    duration: '',
    budget: '',
    release_date: '',
    box_office: '',
    cinematographers: [],
    poster: '',
    producers: [],
    summary: ''
  };
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((movie_id) => {
      this.movie_id = movie_id['movieId'];
    });

    this.movieService.getMovieById(this.movie_id).subscribe((movie) => {
      this.movie = movie;
    });
  }

  backToHome(): void {
    this.router.navigate(['/movies']);
  }
}
