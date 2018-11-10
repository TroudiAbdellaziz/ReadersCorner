import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {BookComponent} from '../component/book/book.component'
import { StarterComponent } from './starter.component';


const routes: Routes = [{
	path: '',
	data: {
        title: 'Starter Page',
        urls: [{title: 'Dashboard',url: '/'},{title: 'Starter Page'}]
    },
	component: StarterComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
    	RouterModule.forChild(routes)
    ],
	declarations: [StarterComponent,BookComponent]
})
export class StarterModule { }