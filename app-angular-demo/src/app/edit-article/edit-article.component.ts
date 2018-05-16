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
  updateObservable: any;
  title:string = "";
  link: string = "";

  constructor(private articleService:ArticlesService, private router: Router, private route:ActivatedRoute, private http:Http) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
     
      this.filterObservable = this.articleService.getArticle(this.id).subscribe(result => {
        this.article=result;
        this.title = this.article.title;
        this.link = this.article.link;
      }, err => {
        console.log("error log");
      },
        () => {
          console.log("finish log");
        }
      );
      
    
    });

  }

  updateArticle(id:number)
  {    
     this.updateObservable = this.articleService.updateArticle(id,this.title,this.link).subscribe(result => {
      console.log(result);
      this.router.navigate(['/list']);
    }, err => {
      console.log("error log");
    },
      () => {
        console.log("finish log");
      }
    );

  }

}
