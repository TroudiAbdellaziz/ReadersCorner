import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { BookService } from '../../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
	templateUrl: './starter.component.html'
})
export class StarterComponent implements AfterViewInit {
	public livres: Array<any> = [];
	public books: Array<any> = [];
	public updated: Boolean = false;
	constructor(
		private service: BookService, 
		private changeDetector: ChangeDetectorRef,
		private route: ActivatedRoute
	) {
		let self = this;
		this.service.getBook().subscribe((res) => {
			self.books = res.lists;
			console.log(self.books);
			self.formingData();
		});
	}
	formingData(){
		let self = this;
		this.route.params.subscribe((params)=>{
			this.changeDetector.markForCheck();
			if (params['sort'] =="price") {
			self.books.sort(function(a,b){return a.price-b.price})
			self.updated = true;
			}
			else if (params['sort'] =="sales"){
			self.books.sort(function(a,b){
				return b.nbSales-a.nbSales})
			self.updated = true;				
			}
			else if (!params['sort']){
				self.updated = true;
			}
		});
	}
	ngAfterViewInit() { }
}