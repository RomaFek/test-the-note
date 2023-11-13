import { Injectable } from '@angular/core';
import { AddNoteComponent } from '../components/add-note/add-note.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private dialog: MatDialog) {}

  public openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    return this.dialog.open(AddNoteComponent, dialogConfig);
  }
}
