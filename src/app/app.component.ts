import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NavbarService } from './navbar/services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'testTheNote';

  public sidenavVisible$!: Observable<boolean>;

  constructor(private navbarService: NavbarService) {
    this.sidenavVisible$ = this.navbarService.sidenavVisible$;
  }
}
