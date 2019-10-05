export class Album {
  albumId: string;
  albumName: string;
  cover: string;
  released: string;
  artist: string;
  price:string;

  constructor(
    albumId: string,
    albumName: string,
    cover: string,
    relased: string,
    artist: string,
    price:string,
  ) {
    this.albumId = albumId;
    this.albumName = albumName;
    this.cover = cover;
    this.released = relased;
    this.artist = artist;
    this.price = price;
  }
}