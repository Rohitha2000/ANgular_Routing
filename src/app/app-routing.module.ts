import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutComponent } from './about/about.component';
import { NopageComponent } from './nopage/nopage.component';
import { ShopComponent } from './shop/shop.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'about', component: AboutComponent, children:[
    {path: 'aboutme', component: AboutMeComponent},
    {path: 'company', component: AboutCompanyComponent}
  ]},
  {path: '', redirectTo: 'shop', pathMatch: 'full'},
  {path: 'user/:userid', component: UserComponent},
  {path: 'shop', component: ShopComponent},
  {path: '**', component: NopageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
