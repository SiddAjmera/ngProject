import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'pagination',
    templateUrl: './pagination.component.html'
})

export class PaginationComponent implements OnChanges{

    @Input() items: Object[] = [];
    @Input('page-size') pageSize: number = 10;
    currentPage: number;
    pages: number[] = [];
    pagesCount: number = 1;

    ngOnChanges(){
        this.currentPage = 1;
		this.pagesCount = this.items.length / this.pageSize; 
		this.pages = [];
		for (var i = 1; i <= this.pagesCount; i++)
			this.pages.push(i);
    }

    @Output('page-changed') pageChanged = new EventEmitter(); 

    previous(){
        this.currentPage--;
        if(this.currentPage == 1) return;
        this.goToPage(this.currentPage);
    }

    next(){
        this.currentPage++;
        if(this.currentPage == this.pagesCount) return;
        this.goToPage(this.currentPage);
    }

    goToPage(page: number){
        this.currentPage = page;
        this.pageChanged.emit(page);
    }
}