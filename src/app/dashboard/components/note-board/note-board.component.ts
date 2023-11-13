import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { DashboardService } from '../../service/dashboard.service';
import { INote } from '../../../shared/note-model';

@Component({
  selector: 'app-note-board',
  templateUrl: './note-board.component.html',
  styleUrls: ['./note-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteBoardComponent {
  public note$: Observable<INote | undefined>;

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService,
  ) {
    this.note$ = this.route.params.pipe(
      map((params) => params['noteId']),
      switchMap((noteId) => this.dashboardService.getOneNote(noteId)),
    );
  }
}
