import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardService } from '../dashboard/service/dashboard.service';
import { Observable } from 'rxjs';
import { INote } from '../shared/note-model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  constructor(private dashboardService: DashboardService) {}

  public allNote(): Observable<INote[]> {
    return this.dashboardService.allNote;
  }
}
