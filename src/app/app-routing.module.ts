import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiografiasComponent } from './anime/biografias/biografias.component';
import { SeriesComponent } from './anime/series/series.component';

const routes: Routes = [
  {
    path: "biografias",
    component: BiografiasComponent
  },
  {
    path: "series",
    component: SeriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
