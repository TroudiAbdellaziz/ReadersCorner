import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PageComponent } from './pages.component';
import { SIDEBAR_TOGGLE_DIRECTIVES } from '../shared/sidebar.directive';

import { NavigationComponent } from '../shared/header-navigation/navigation.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { OrderComponent } from './component/order/order.component';
import { LoginModalComponent } from './component/login-modal/login-modal.component';

@NgModule({
    imports: [
        CommonModule,
        PagesRoutingModule
    ],
    declarations: [
        PageComponent,
        NavigationComponent,
        SidebarComponent,
        BreadcrumbComponent,
        SIDEBAR_TOGGLE_DIRECTIVES,
        LoginComponent,
        SignupComponent,
        OrderComponent,
        LoginModalComponent
    ]
})
export class PagesModule { }
