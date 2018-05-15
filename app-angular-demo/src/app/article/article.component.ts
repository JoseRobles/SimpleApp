import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from '../_models/article.model';
import { ArticlesService } from '../shared/articles.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor(private route: ActivatedRoute, private articleService:ArticlesService, private router: Router) {
    // article is populated by the Input now,
    // so we don't need anything here
  }
  
  
  returnUrl: string;

  voteUp(votes): boolean {
    let currentVotes= +votes;
    currentVotes += 1;
    this.article.votes=currentVotes;
    return false;
  }

  delete(id)
  {
    if (confirm('Are you sure to delete this?'))
    {
        this.articleService.deleteArticle(id)
        .subscribe(() => { [this.returnUrl] });
    }
  }

  voteDown(votes): boolean {
    let currentVotes= +votes;
    currentVotes -= 1;
    this.article.votes=currentVotes;
    return false;
  }
  // domain() is a utility function that extracts
    // the domain from a URL, which we'll explain shortly
    domain(link): string {
      try {
        // e.g. http://foo.com/path/to/bar
        const domainAndPath: string = link.split('//')[1];
        // e.g. foo.com/path/to/bar
        return domainAndPath.split('/')[0];
      } catch (err) {
        return null;
      }
    }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

}
