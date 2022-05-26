import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../create-topic/create-topic.component';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-create-topic-dialog',
  templateUrl: './create-topic-dialog.component.html',
  styleUrls: ['./create-topic-dialog.component.scss']
})
export class CreateTopicDialogComponent implements OnInit {
  errorMessage = ' ';
  topic: any = null;

  constructor(
    public dialogRef: MatDialogRef<CreateTopicDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    @Inject(MessageService) private messageService: MessageService) { }

  onNoClick(): void {
    this.dialogRef.close({ 'sujet': null })
  }

  onClick(): void {console.log(this.data.idCours, this.data.sujet);
    this.messageService.sendMessage('saveNewTopic' , {'id': this.data.idCours, 'sujet': this.data.sujet}).subscribe(
      (data: any) => {
        if (data.status === 'ok'){
          this.dialogRef.close({ 'sujet': data.data })
        }
        else {
          this.errorMessage = data.reason
          console.log(this.errorMessage)
        }
      }
    );
  }

  ngOnInit(): void {
  }

}
