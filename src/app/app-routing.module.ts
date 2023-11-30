import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./component/product/product.component";
import {AppComponent} from "./app.component";
import {ContentComponent} from "./component/content/content.component";

const routes: Routes = [
  { path: '', component: ContentComponent},
  { path: 'contact', loadChildren:() => import('./component/contact/contact.module').then(x=>x.ContactModule)},
  { path: 'product', component: ProductComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top'

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
