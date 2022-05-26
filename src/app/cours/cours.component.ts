import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MessageService } from '../message/message.service';

export interface PeriodicElement {
  id: number,
  nom: string;
  topics: number;
  posts: number;
  msg: string;
}

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})

export class CoursComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'topics', 'posts', 'msg'];
  liste: PeriodicElement[] = [];
  dataSource = new MatTableDataSource<PeriodicElement>();

  constructor(private service: MessageService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.service.sendMessage('getCours', null).subscribe(
      (data: any)=>{  console.log(data)
        for (let cours of data['data']) {
          console.log(cours);
          let element : PeriodicElement = {
            id: cours['id'],
            nom: cours['nom'],
            topics: 0,
            posts: 0,
            msg: '12/12/2012'
          };
          this.liste.push(element);
          console.log(this.liste)
        }
        this.dataSource.data = this.liste; // = new MatTableDataSource(this.liste);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (err: any)=>{
        console.log(err)
      }
    );
  }

}
