import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { MovieComponent } from './movie/movie.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'post', component: PostComponent },
    { path: 'movie', component: MovieComponent }
];