import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AlbumStorage } from "../_providers/albumStorage.provider";
import { Album } from "../_models/album.model";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {
  public model: Album;
  constructor(private route: ActivatedRoute, private router: Router, private albumStorage: AlbumStorage) {
    if (typeof this.albumStorage.storage == 'undefined') {
      this.router.navigate(['/']);
      return;
    }
    this.model = this.albumStorage.storage;

  }

  ngOnInit() {

  }
  sendMeHome() {
    this.router.navigate(['']);
  }

}
