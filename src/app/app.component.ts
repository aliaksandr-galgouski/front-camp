import { Component, OnInit, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(injector: Injector) {
    this.defineCustomElements(injector);
  }

  ngOnInit(): void {
    this.appendFooter();
  }

  appendFooter(): void {
    const footerElement = document.createElement('footer-element');
    const footerContainer = document.querySelector('.footer');
    footerContainer.appendChild(footerElement);
  }

  private defineCustomElements(injector: Injector): void {
    // footer-element
    try {
      const footerElement = createCustomElement(FooterComponent, { injector });
      customElements.define('footer-element', footerElement);
    } catch (error) {}
  }
}
