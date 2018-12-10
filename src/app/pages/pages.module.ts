import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PageComponent } from './pages.component';


import { NavigationComponent } from '../shared/header-navigation/navigation.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { SignupComponent } from './component/signup/signup.component';
import { OrderComponent } from './component/order/order.component';
import { LoginModalComponent } from './component/login-modal/login-modal.component';
import { TopperComponent } from './component/topper/topper.component';
import { ContactComponent } from './component/contact/contact.component';
import {TopbarComponent} from './component/topbar/topbar.component';
import {AdminComponent} from '../admin/admin.component';
import { SettingsComponent } from './component/settings/settings.component';
@NgModule({
    imports: [
        CommonModule,
        PagesRoutingModule
    ],
    declarations: [
        PageComponent,
        NavigationComponent,
        SidebarComponent,
        SignupComponent,
        OrderComponent,
        LoginModalComponent,
        ContactComponent,
        TopbarComponent,
        AdminComponent,
        SettingsComponent
    ]
})
export class PagesModule { }
