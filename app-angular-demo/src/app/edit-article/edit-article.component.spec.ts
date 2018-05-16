/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


import { EditArticleComponent } from './edit-article.component';
import { FormsModule } from '@angular/forms';
import { ArticlesService } from '../shared/articles.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing';

describe('EditArticleComponent', () => {
  let component: EditArticleComponent;
  let fixture: ComponentFixture<EditArticleComponent>;
  let de: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule, HttpClientModule, RouterTestingModule],
      declarations: [ EditArticleComponent],
      providers:[ArticlesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArticleComponent);
    component = fixture.componentInstance;
    
    de = fixture.debugElement.query(By.css('.inputTitle'));
    element  = de.nativeElement;

  });

  it(`should create service`, async(inject([ArticlesService],
    (apiService: ArticlesService) => {
      expect(apiService).toBeTruthy();
  })));


});
