import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { FooterBackComponent } from './BackOffice/footer-back/footer-back.component';
import { NavbarBackComponent } from './BackOffice/navbar-back/navbar-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { HomeComponent } from './BackOffice/home/home.component';
import { WidgetsComponent } from './BackOffice/widgets/widgets.component';
import { TablesComponent } from './BackOffice/tables/tables.component';
import { FormsComponent } from './BackOffice/forms/forms.component';
import { HeaderComponent } from './FrontOffice/header/header.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { HomefrontComponent } from './FrontOffice/homefront/homefront.component';
import { MatchesComponent } from './FrontOffice/matches/matches.component';
import { PlayersComponent } from './FrontOffice/players/players.component';
import { BlogsComponent } from './FrontOffice/blogs/blogs.component';
import { ContactComponent } from './FrontOffice/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';;
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductDetailsComponent } from './product-details/product-details.component'; 

@NgModule({
  declarations: [
    AppComponent,
    AllTemplateBackComponent,
    FooterBackComponent,
    NavbarBackComponent,
    SidebarBackComponent,
    HomeComponent,
    WidgetsComponent,
    TablesComponent,
    FormsComponent,
    HeaderComponent,
    FooterFrontComponent,
    AllTemplateFrontComponent,
    HomefrontComponent,
    MatchesComponent,
    PlayersComponent,
    BlogsComponent,
    ContactComponent,
    RegistrationComponent,
    LoginComponent,
    AddProductComponent,
    ProductListComponent,
    ProductUpdateComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule ,
    FormsModule ,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
