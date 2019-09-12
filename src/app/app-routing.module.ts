import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { EssayComponent } from './essay/essay.component';
import { TagComponent } from './tag/tag.component';
import { ClassificationComponent } from './classification/classification.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path: 'app-home',
    component: HomeComponent
  },
  {
    path: 'app-essay',
    component: EssayComponent
  },
  {
    path: 'app-tag',
    component: TagComponent
  },
  {
    path: 'app-classification',
    component: ClassificationComponent
  },
  {
    path: 'app-about',
    component: AboutComponent
  },
  { path: '',
    redirectTo: '/app-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
