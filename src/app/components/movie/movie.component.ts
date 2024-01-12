import { Component, OnInit, inject } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { MovieDetails } from '../../interfaces/movie-details';
import { environment } from '../../../environments/environment';

const imgUrl = environment.imgUrl;

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})

export class MovieComponent implements OnInit {
  private movieServices = inject(MovieService);

  // movies: any = [];
  movies: MovieDetails[] = [];

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.movieServices.getMovies().subscribe({
      next: (res: any) => {
        this.movies = res.results as MovieDetails[];
      },
      error: (err) => console.log('Error fetching posts', err)
    });
  }

  getFullImageUrl(poster_path: String):String{
    return imgUrl + poster_path;
  }
}
