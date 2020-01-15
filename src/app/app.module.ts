import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// components
import { HeaderComponent, FooterComponent, NavbarComponent, AccountPanelComponent } from "./components/";

// page components
import { ContactsComponent } from "./pages/common";
import { NotFoundComponent } from "./pages/errors";
import { NewsListComponent, NewsEditComponent, NewsArticleComponent } from "./pages/news";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, FooterComponent, NavbarComponent, AccountPanelComponent,

    NewsListComponent, NewsEditComponent, NewsArticleComponent,
    ContactsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
