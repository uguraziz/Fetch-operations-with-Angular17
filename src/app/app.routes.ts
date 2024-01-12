import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { MovieComponent } from './components/movie/movie.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'post', component: PostComponent },
    { path: 'movie', component: MovieComponent }
];