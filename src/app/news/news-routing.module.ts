import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// pages
import { ListPageComponent } from './pages/list-page/list-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { ReadPageComponent } from './pages/read-page/read-page.component';

const routes: Routes = [
  {
    path: 'news',
    children: [
      { path: 'list', component: ListPageComponent },
      { path: 'create', component: EditPageComponent },
      {
        path: ':id',
        children: [
          { path: 'read', component: ReadPageComponent },
          { path: 'edit', component: EditPageComponent },

          { path: '', pathMatch: 'full', redirectTo: '/news' }
        ]
      },

      { path: '', pathMatch: 'full', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {}
