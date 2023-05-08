import { Routes } from '@angular/router';
import { AdicionarEventoComponent } from './Eventos/adicionar-evento/adicionar-evento.component';
import { ListaEventosComponent } from './Eventos/lista-eventos/lista-eventos.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { InscricaoComponent } from './usuario/inscricao/inscricao.component';
import { LoginComponent } from './usuario/login/login.component';


export const rootRouterConfig: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'eventos', component: ListaEventosComponent},
    {path: 'inscricao', component: InscricaoComponent},
    {path: 'entrar', component: LoginComponent},
    {path: 'novo-evento',canActivate:[AuthService], data:[{claim:{nome:' ',valor:' '}}], component: AdicionarEventoComponent}


]