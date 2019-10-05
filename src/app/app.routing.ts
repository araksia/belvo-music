import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumListComponent } from './album-list/album-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AlbumListComponent},
  { path: ':id', component: AlbumDetailsComponent },
  { path: '***', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}

