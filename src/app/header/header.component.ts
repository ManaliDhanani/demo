import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  // isLoginPage: boolean;
  // isSignupPage: boolean;
  currentPathSegment: string;

  constructor(private router: Router) {
  }
  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentPathSegment = event.url.split('/').filter(segment => segment !== '')[0];
      console.log('Current path segment:', this.currentPathSegment);
    });
  }
}
