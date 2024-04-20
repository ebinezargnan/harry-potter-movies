import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { MovieDetail } from '../model/moviedetail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) { }

  getMovieList(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>('/movies');
  }

  getMovieById(movieId: string): Observable<MovieDetail> {
    return this.http
      .get<MovieDetail>(`/movies/${movieId}`);
  }
}
