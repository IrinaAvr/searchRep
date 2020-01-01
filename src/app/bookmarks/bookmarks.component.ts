import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RepositoryModel} from '../models/repository.model';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})

export class BookmarksComponent implements OnInit, OnChanges {
  @Input() Bookmarks: RepositoryModel[];
  
  constructor() { }
  
  ngOnInit() {
    //if (sessionStorage.getItem('Bookmarks')){
    //this.Bookmarks = JSON.parse(sessionStorage.getItem('Bookmarks'));}
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!changes.firstChange){
      this.Bookmarks = changes.Bookmarks.currentValue;
      //this.Bookmarks = JSON.parse(sessionStorage.getItem('Bookmarks'));
    }
  }
  public goToUrl(link:string): void {
    window.open("https://github.com/" + link, "_blank");
  }

}