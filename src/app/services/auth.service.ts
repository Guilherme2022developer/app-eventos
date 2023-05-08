import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


@Injectable()
export class AuthService implements CanActivate {


    public token: string | null = null;
    public user: null = null;
    
    constructor(private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        this.token = localStorage.getItem('eio.token');
        this.user = JSON.parse(localStorage.getItem('eio.user') || '{}');;
        if(!this.token){
         this.router.navigate(['/entrar'])
        }


        return true;
    }

}