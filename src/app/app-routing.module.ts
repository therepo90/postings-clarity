import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostingsPageComponent} from './postings-page/postings-page.component';

const routes: Routes = [
  { path: 'postings', component: PostingsPageComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/postings', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
