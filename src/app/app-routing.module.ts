import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormPageComponent} from './form-page/form-page.component';
import {PostingsPageComponent} from './postings-page/postings-page.component';

const routes: Routes = [
  { path: 'postings', component: PostingsPageComponent, pathMatch: 'full' },
  { path: 'add', component: FormPageComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/postings', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
