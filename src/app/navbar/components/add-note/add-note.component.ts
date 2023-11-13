import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { INote } from '../../../shared/note-model';
import { DashboardService } from '../../../dashboard/service/dashboard.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddNoteComponent {
  public submitted = false;
  public newNoteGroup!: FormGroup<{
    description: FormControl<string | null>;
    header: FormControl<string | null>;
  }>;

  constructor(
    private dialogRef: DialogRef<string>,
    private dashboardService: DashboardService,
  ) {
    this._createForm();
  }

  private _createForm() {
    this.newNoteGroup = new FormGroup({
      description: new FormControl('', Validators.required),
      header: new FormControl('', Validators.required),
    });
  }

  public createNote() {
    this.submitted = true;
    if (this.newNoteGroup.valid) {
      const description = this.newNoteGroup.controls.description.value;
      const header = this.newNoteGroup.controls.header.value;
      const note: INote = {
        id: Date.now(),
        description,
        header,
      };
      this.dashboardService.addNewNote(note);
      this.closeModal();
    }
  }

  public closeModal() {
    this.dialogRef.close();
  }
}
