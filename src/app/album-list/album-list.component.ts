import { Component, OnInit } from "@angular/core";
import { Album } from "../_models/album.model";
import { AlbumsService } from "../_services/albums.services";
import { SearchService } from "../_services/search.service";

@Component({
  selector: "app-album-list",
  templateUrl: "./album-list.component.html",
  styleUrls: ["./album-list.component.scss"]
})
export class AlbumListComponent implements OnInit {
  loading = false;
  albumArray: Array<any> = [];
  albums: Album[] = [];
  filteredAlbums: Album[] = [];
  albumsCount:number = 100;

  constructor(private albumsService: AlbumsService, private fs: SearchService) {}

  ngOnInit() {
    this.fs.currentFilter.subscribe(filter => {
      this.filteredAlbums = this.albums.filter(x => {
        filter = filter.toLocaleLowerCase();
        const searchFields = [
          x.albumName.toLocaleLowerCase(),
          x.artist.toLocaleLowerCase()
        ];
        const results = searchFields.map(result => result.indexOf(filter));
        // adding +1 because finds return 0 on positive
        if (results.find(result => result >= 0) + 1) {
          return true;
        }
      });
    });
    this.getAlbum();
    

  }
  getAlbum() {
    this.albumsService.getAlbums(this.albumsCount).subscribe(result => {
      result.entry.forEach(element => {
        
        const album: Album = new Album(
          element.id.attributes["im:id"],
          element["im:name"].label,
          element["im:image"][2].label,
          element["im:releaseDate"].attributes.label,
          element["im:artist"].label,
          element["im:price"].label,
        );
        this.albums.push(album);
      });
      this.filteredAlbums = this.albums;
    });
  }

}
