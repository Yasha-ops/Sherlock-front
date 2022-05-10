import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

interface Student
{
    rank: number;
    login : string;
    wpm : number;
    class : string;
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  dataSource: MatTableDataSource<Student>;
  posts: Student[];
  columns: string[] = ['rank', 'login', 'wpm', 'class'];
  
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  constructor() { 
    this.posts = [
      {
        rank: 2,
        login: "yassine.damiri",
        wpm: 100,
        class: 'A3'
      },

      {
        rank: 1,
        login: "param.dave",
        wpm: 120,
        class: 'A3'
      },

      {
        rank: 3,
        login: "raphael.duhen",
        wpm: 73,
        class: 'A3'
      }
    ];
    this.dataSource = new MatTableDataSource(this.posts);
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) { 
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
