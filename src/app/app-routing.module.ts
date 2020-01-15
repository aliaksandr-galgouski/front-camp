import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ContactsComponent } from "./pages/common";
import { NotFoundComponent } from "./pages/errors";
import { NewsListComponent, NewsEditComponent, NewsArticleComponent } from "./pages/news";

const routes: Routes = [
  // news
  { path: "news/edit/:id", component: NewsEditComponent },
  { path: "news/create", component: NewsEditComponent },
  { path: "news/:id", component: NewsArticleComponent },
  { path: "news", component: NewsListComponent },

  // common
  { path: "contacts", component: ContactsComponent },

  // errors
  { path: "404", component: NotFoundComponent },
  
  { path: "", pathMatch: "full", redirectTo: "/news" },
  { path: "**", redirectTo: "/404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
