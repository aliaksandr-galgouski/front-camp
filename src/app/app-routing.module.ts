import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorNotFoundComponent } from './pages/error-not-found/error-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/news' },
  { path: '**', component: ErrorNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
