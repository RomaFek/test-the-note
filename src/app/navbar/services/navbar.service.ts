import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private sidenavVisible = new BehaviorSubject<boolean>(false);
  public sidenavVisible$ = this.sidenavVisible.asObservable();

  public openSidenav() {
    this.sidenavVisible.next(true);
  }

  public closeSidenav() {
    this.sidenavVisible.next(false);
  }
}
