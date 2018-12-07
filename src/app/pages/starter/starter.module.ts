import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {BookComponent} from '../component/book/book.component'
import { StarterComponent } from './starter.component';
import {LoginComponent} from '../component/login/login.component';
import {SignupComponent} from '../component/signup/signup.component';
import { LoginModalComponent } from '../component/login-modal/login-modal.component';
import {TopperComponent} from '../component/topper/topper.component'
const routes: Routes = [{
	path: '',
	data: {
        title: 'Starter Page',
        urls: [{title: 'Dashboard',url: '/'},{title: 'Starter Page'}]
    },
	component: StarterComponent
},
{
	path: ':sort',
	data: {
        title: 'Starter Page',
        urls: [{title: 'Dashboard',url: '/'},{title: 'Starter Page'}]
    },
	component: StarterComponent
}
];

@NgModule({
	imports: [
		FormsModule,
		ReactiveFormsModule,
    	CommonModule, 
    	RouterModule.forChild(routes)
    ],
	declarations: [StarterComponent,
		BookComponent
		,TopperComponent
		]
})
export class StarterModule { }