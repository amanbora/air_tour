import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-official',
  templateUrl: './navbar-official.component.html',
  styleUrls: ['./navbar-official.component.css']
})
export class NavbarOfficialComponent  {

  auth = localStorage.getItem('auth');

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

  
  logout() {
    localStorage.clear();
    this.router.navigate([''])
    .then(() => {
    window.location.reload();
  });
}

login() {
  this.router.navigate(['']);
}
}


