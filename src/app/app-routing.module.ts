import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { HomeComponent } from './BackOffice/home/home.component';
import { WidgetsComponent } from './BackOffice/widgets/widgets.component';
import { TablesComponent } from './BackOffice/tables/tables.component';
import { FormsComponent } from './BackOffice/forms/forms.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { HomefrontComponent } from './FrontOffice/homefront/homefront.component'; 
import { MatchesComponent } from './FrontOffice/matches/matches.component'; 
import { PlayersComponent } from './FrontOffice/players/players.component'; 
import { BlogsComponent } from './FrontOffice/blogs/blogs.component'; 
import { ContactComponent } from './FrontOffice/contact/contact.component'; 
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductDetailsComponent } from './product-details/product-details.component';



const routes: Routes = [
  {
    path: 'back-office',
    component: AllTemplateBackComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'widget', component: WidgetsComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'forms', component: FormsComponent } 
      
       
    ]
  },
  {
    path: 'front-office',
    component: AllTemplateFrontComponent,
    children: [
      { path: '', component: HomefrontComponent } ,{ path: 'matches', component: MatchesComponent } ,{ path: 'players', component: PlayersComponent },{ path: 'blogs', component: BlogsComponent },{ path: 'contact', component: ContactComponent }
    ]
  },
  { path: '', redirectTo: 'back-office', pathMatch: 'full' } , 
  { path: 'login', component: LoginComponent } ,
  { path: 'registre', component: RegistrationComponent } ,
  { path: 'addpr', component: AddProductComponent } , 
  { path: 'products', component: ProductListComponent } ,
  { path: 'product-update/:id', component: ProductUpdateComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
