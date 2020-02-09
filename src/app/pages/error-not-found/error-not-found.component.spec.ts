import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorNotFoundComponent } from './error-not-found.component';
import { Router } from '@angular/router';

const MockRouter = {
  url: 'invalidUrl'
};

describe('ErrorNotFoundComponent', () => {
  let component: ErrorNotFoundComponent;
  let fixture: ComponentFixture<ErrorNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorNotFoundComponent],
      providers: [
        {
          provide: Router,
          useValue: MockRouter
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render invalid url', () => {
    const element = fixture.nativeElement;
    const spanWithUrl = element.querySelector('.container span');

    expect(spanWithUrl.textContent).toEqual(MockRouter.url);
  });
});
