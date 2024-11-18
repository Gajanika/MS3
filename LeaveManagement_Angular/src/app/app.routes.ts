import { Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {
        path:'',
        component:UserComponent,
        children:[
            {path: 'login', component:LoginComponent}
        ]
    }
];
