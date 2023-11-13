import { Injectable } from '@angular/core';
import { INote, noteDate } from '../../shared/note-model';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private dataStateNoteSubject: BehaviorSubject<INote[]> = new BehaviorSubject<
    INote[]
  >(noteDate);

  public get allNote(): Observable<INote[]> {
    return this.dataStateNoteSubject.asObservable();
  }

  public addNewNote(note: INote) {
    this.dataStateNoteSubject.next([...this.dataStateNoteSubject.value, note]);
  }

  public getOneNote(id: string): Observable<INote | undefined> {
    return this.allNote.pipe(
      map((notes) => notes.find((note) => note.id === +id)),
    );
  }
}
