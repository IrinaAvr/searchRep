import { Component, OnInit } from '@angular/core';
import { RepositoryModel} from '../models/repository.model';
import { RepositoriesService} from '../repositories.service';
import { BookmarksComponent } from '../bookmarks/bookmarks.component';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {
  searchString: string;
  repositories:RepositoryModel[];
  bookmarks: Array<RepositoryModel>;
  constructor(public repositoriesService:RepositoriesService) {
   
  }

  ngOnInit() {
  }
  public goToUrl(link:string): void {
    window.open("https://github.com/" + link, "_blank");
  }
  public GetRepositoriesByKeyword(str:string){
    if (str.length >= 3) {
      this.repositoriesService.GetRepositoriesByKeyword(str)
      .subscribe(
        (rep:RepositoryModel[])=>{
        this.repositories = rep;
      });
      return;
    }
    return;
  }
  
  
  public Bookmark(rep:RepositoryModel) {
    
    this.repositoriesService.Bookmark(rep)
    .subscribe(
      (data) => {
          this.bookmarks = data;
      }
    );
  }

  
}


