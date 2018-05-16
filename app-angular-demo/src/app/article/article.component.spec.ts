import { async, ComponentFixture, TestBed, inject} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ArticleComponent } from './article.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ArticlesService } from '../shared/articles.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule, HttpClientModule, RouterTestingModule],
      declarations: [ ArticleComponent ],
      providers:[ArticlesService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', async(inject([ArticlesService],
    (apiService: ArticlesService) => {
    expect(component).toBeTruthy();
  })));
});
