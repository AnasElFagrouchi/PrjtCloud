import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService, PhpData } from '../message/message.service';

export interface PeriodicElement {
  id: number,
  sujet: string,
  posts: number,
  msg: string,
}

export interface BreadcrumbData {
  nom: string,
  route: string
}

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  errorMessage: string = "";
  cours!: string;
  displayedColumns: string[] = ['sujet', 'posts', 'msg'];
  liste: PeriodicElement[] = [];
  dataSource = new MatTableDataSource<PeriodicElement>();
  breadcrumb: BreadcrumbData[] = [];
  id!: any;

  constructor(private service: MessageService, private route: ActivatedRoute, private router: Router) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.breadcrumb.push({nom: "Tous les cours", route: '/cours'})

    this.service.sendMessage('getTopics', {'id': this.id}).subscribe(
      (data: PhpData) => {
        if (data.status == 'ok') { //data.data = [];
          if (data.data.length == 0) this.errorMessage = "Il n'y a pas encore sujet pour ce cours.";
          else {
            this.cours = data.data[0]['nom'];
            this.breadcrumb.push({nom: this.cours, route: ''})
            for (let topic of data.data) {
              console.log(topic);
              let element : PeriodicElement = {
                id: topic['id'],
                sujet: topic['sujet'],
                posts: 0,
                msg: '12/12/2012'
              };
              this.liste.push(element);
              console.log(this.liste)
            }
            this.dataSource.data = this.liste;
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
        }
        else this.router.navigateByUrl('/login');
      },(err: any) => { }
    )
  }

  OnCreateTopic(topic: any): void{
    console.log(topic);
    this.liste.unshift(topic);
    this.dataSource.data = this.liste;
  }

}
