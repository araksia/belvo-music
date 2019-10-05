import { Component, OnInit, Input } from "@angular/core";
import { Album } from "../_models/album.model";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AlbumStorage } from "../_providers/albumStorage.provider";

@Component({
  selector: "app-album-item",
  templateUrl: "./album-item.component.html",
  styleUrls: ["./album-item.component.scss"]
})
export class AlbumItemComponent implements OnInit {
  @Input() album: Album;
  constructor(private route: ActivatedRoute, private router: Router, private albumStorage: AlbumStorage) { }
  albumId: string;
  albumName: string;
 

  ngOnInit() {

    this.route.params.subscribe(param => {
      this.albumId = param.albumId;
      this.albumName = param.albumId;

    });
  
  }
   public onGetTracks(album) {
    this.albumStorage.storage = this.album;
        this.router.navigate([ album.albumId,
          album.albumId]);
    }
}