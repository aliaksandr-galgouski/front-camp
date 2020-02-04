import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArticleShortComponent } from './news-article-short.component';

describe('NewsArticleShortComponent', () => {
  let component: NewsArticleShortComponent;
  let fixture: ComponentFixture<NewsArticleShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsArticleShortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsArticleShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
