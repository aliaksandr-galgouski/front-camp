import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './pages/news/news.component';
import { NewsReadComponent } from './pages/news-read/news-read.component';
import { NewsEditComponent } from './pages/news-edit/news-edit.component';
import { NewsCreateComponent } from './pages/news-create/news-create.component';

const routes: Routes = [
  {
    path: 'news',
    children: [
      { path: 'create', component: NewsCreateComponent },
      { path: '', pathMatch: 'full', component: NewsComponent }
    ]
  },
  {
    path: 'news/:id',
    children: [
      { path: 'edit', component: NewsEditComponent },
      { path: '', pathMatch: 'full', component: NewsReadComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {}
