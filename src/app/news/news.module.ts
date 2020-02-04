import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './pages/news/news.component';
import { NewsReadComponent } from './pages/news-read/news-read.component';
import { NewsEditComponent } from './pages/news-edit/news-edit.component';
import { NewsCreateComponent } from './pages/news-create/news-create.component';
import { NewsArticleShortComponent } from './components/news-article-short/news-article-short.component';
import { NewsArticleFullComponent } from './components/news-article-full/news-article-full.component';
import { NewsToolbarComponent } from './components/news-toolbar/news-toolbar.component';
import { NewsFormComponent } from './components/news-form/news-form.component';

@NgModule({
  declarations: [
    NewsComponent,
    NewsReadComponent,
    NewsEditComponent,
    NewsCreateComponent,
    NewsArticleShortComponent,
    NewsArticleFullComponent,
    NewsToolbarComponent,
    NewsFormComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, NewsRoutingModule]
})
export class NewsModule {}
