import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { AlbumListComponent } from "./album-list/album-list.component";
import { AlbumItemComponent } from "./album-item/album-item.component";
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import {AlbumsService } from "./_services/albums.services";
import {SearchService } from "./_services/search.service";
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { NgxLoadingModule } from 'ngx-loading';
import { AppRoutingModule } from './app.routing';
import { AlbumStorage } from "./_providers/albumStorage.provider";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AlbumListComponent,
    AlbumItemComponent,
    AlbumDetailsComponent
  ],
  imports: [BrowserModule, HttpClientModule,   HttpClientJsonpModule, FormsModule,  AppRoutingModule ,NgxLoadingModule.forRoot({})],
  providers: [AlbumsService, SearchService, AlbumStorage],
  bootstrap: [AppComponent]
})
export class AppModule {}