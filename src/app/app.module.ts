import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { EditorialModule } from './editorial/editorial.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthorModule } from './author/author.module';
import { BookRoutingModule } from './book/book-routing.module';
import { AuthorRoutingModule } from './author/author-routing.module';
import { EditorialRoutingModule } from './editorial/editorial-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookModule,
    EditorialModule,
    HttpClientModule,
    AuthorModule,
    BookRoutingModule,
    AuthorRoutingModule,
    EditorialRoutingModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
