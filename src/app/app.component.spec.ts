import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NgElement } from '@angular/elements';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, HeaderComponent, FooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should define "footer-element"', () => {
    const element = document.createElement('footer-element');
    expect(element).toBeInstanceOf(NgElement);
  });

  it('should append "footer-element"', () => {
    const element = fixture.nativeElement;
    const footerElement = element.querySelector('footer-element');

    expect(footerElement).toBeDefined();
  });
});
