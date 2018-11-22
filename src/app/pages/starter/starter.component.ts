import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { BookService } from '../../services/book.service'
@Component({
	templateUrl: './starter.component.html'
})
export class StarterComponent implements AfterViewInit {
	public livres: Array<any> = [];
	public books: Array<any> = [];
	public updated: Boolean = false;
	constructor(private service: BookService, private changeDetector: ChangeDetectorRef) {
		let self = this;
		this.service.getBook().subscribe((res) => {
			self.books = res.lists;
			self.updated = true;
		});
	}

	ngAfterViewInit() { }
}