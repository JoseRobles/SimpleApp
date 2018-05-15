import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Article } from '../_models/article.model';
import { ArticlesService } from '../shared/articles.service';
import { Observable, Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})


export class EditArticleComponent implements OnInit {

  id:number;
  article: Article;
  filterObservable: any;

  constructor(private articleService:ArticlesService, private router: Router, private route:ActivatedRoute, private http:Http) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
     
      this.filterObservable = this.articleService.getArticle(this.id) .subscribe(result => {
        this.article=result;
      }, err => {
        console.log("error log");
      },
        () => {
          console.log("finish log");
        }
      );
      
    
    });

  }

}
