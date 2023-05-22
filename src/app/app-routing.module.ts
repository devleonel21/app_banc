import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./auth/login/login.component";
import { PrincipalComponent } from "./pages/principal/principal.component";

const routes : Routes = [
    { path : '',  component: HomeComponent },
    { path : 'login',  component: LoginComponent },
    { path : 'principal',  component: PrincipalComponent },
    { path : '**', redirectTo : '' }
];

@NgModule({
    imports : [
        RouterModule.forRoot(routes)
    ],
    exports : [
        RouterModule
    ]
})

export class AppRoutingModule { }
