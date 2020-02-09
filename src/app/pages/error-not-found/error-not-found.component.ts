import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './error-not-found.component.html',
  styleUrls: ['./error-not-found.component.scss']
})
export class ErrorNotFoundComponent {
  constructor(public router: Router) {}
}
