import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './pages.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {LoginComponent} from '../pages/component/login/login.component';
import {SignupComponent} from '../pages/component/signup/signup.component';
import {OrderComponent} from '../pages/component/order/order.component';
import {AdminComponent} from '../../app/admin/admin.component';
const routes: Routes = [
    {
        path: '', component: PageComponent,
        children: [
            { path: 'starter', loadChildren: './starter/starter.module#StarterModule' },
            { path: 'login', component: LoginComponent},
            { path: 'signup', component: SignupComponent},
            { path: 'order', component: OrderComponent},
                ]
    },
    { path: 'admin',component : AdminComponent}
    
];

@NgModule({
    imports: [RouterModule.forChild(routes),FormsModule,ReactiveFormsModule],
    exports: [RouterModule,ReactiveFormsModule,FormsModule]
})
export class PagesRoutingModule { }
