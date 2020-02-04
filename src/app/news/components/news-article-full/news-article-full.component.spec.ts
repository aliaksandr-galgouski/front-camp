import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArticleFullComponent } from './news-article-full.component';

describe('NewsArticleFullComponent', () => {
  let component: NewsArticleFullComponent;
  let fixture: ComponentFixture<NewsArticleFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsArticleFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsArticleFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
