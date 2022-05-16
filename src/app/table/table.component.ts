import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TableService } from './table.service';
import { HttpClient } from '@angular/common/http';


interface Student
{
    username : string;
    wpm : number;
}


interface Entries
{
    entries : Student[];
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TableService]
})
export class TableComponent implements OnInit {

  dataSource: MatTableDataSource<Student>;
  posts: Student[]= [];
  columns: string[] = ['wpm', 'username'];
  
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  private ROOT_URL : string = "https://b6a3-2a01-e0a-4d5-2fb0-848-51cb-b4ce-8264.eu.ngrok.io";

  constructor(private http: HttpClient) { 
    this.dataSource = new MatTableDataSource(this.posts);
  }

  ngOnInit(): void {
    console.log("Init !");

    var result : Entries =  JSON.parse('{}');

    this.http.get(this.ROOT_URL + '/sorted', { responseType: 'text' })
    .subscribe(res   => {
      result = JSON.parse(res);
      console.log(result.entries)
      result.entries.forEach(student=> {
        console.log("Student " + student.username)
        this.posts.push(student);
      });

      this.dataSource = new MatTableDataSource(this.posts);
    })


    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) { 
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
