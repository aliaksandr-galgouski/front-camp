import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NewsRoutingModule } from './news-routing.module';
// modules
import { SharedModule } from '../shared/shared.module';

// components
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ArticleComponent } from './components/article/article.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ReadPageComponent } from './pages/read-page/read-page.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    ArticleComponent,
    ListPageComponent,
    EditPageComponent,
    ArticleFormComponent,
    ReadPageComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, NewsRoutingModule, SharedModule],
  entryComponents: [ArticleComponent]
})
export class NewsModule {}
