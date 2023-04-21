import { NgModule } from '@angular/core';
import { BrowserModule,Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

//shared componets
import { MenuSuperiorComponent } from './shared/menu-superior/menu-superior.component';
import { MainPrincipalComponent } from './shared/main-principal/main-principal.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuLoginComponent } from './shared/menu-login/menu-login.component';

//componets
import { HomeComponent } from './home/home.component';
import { ListaEventosComponent } from './Eventos/lista-eventos/lista-eventos.component';
import { AppComponent } from './app.component';

//botstrap
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { rootRouterConfig } from './app.routes';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

//services
import { SeoService } from './services/seo.service';

//import {CollapseModule} from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    MainPrincipalComponent,
    FooterComponent,
    HomeComponent,
    MenuLoginComponent,
    ListaEventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    RouterModule.forRoot(rootRouterConfig,{useHash: false})
  ],
  providers: [
  Title,
  SeoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
