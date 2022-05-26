import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CreateTopicDialogComponent} from '../create-topic-dialog/create-topic-dialog.component';

export interface DialogData {
  sujet: string;
  idCours: number;
}
@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss']
})
export class CreateTopicComponent implements OnInit {

  @Input() item: string | undefined ;
  sujet: string | undefined;
  idCours: number | undefined;
  @Output() newEvt = new EventEmitter<string>() ;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateTopicDialogComponent, {
      width: '250px',
      data: {sujet: this.sujet , idCours: this.item}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      console.log(result['sujet'])
      if (result['sujet'] != null) {
        this.newEvt.emit(result['sujet']);
      }
    });
  }

  ngOnInit(): void {
  }

  afficherConsole(): void {
    console.log('ça marche bien');
  }
}
