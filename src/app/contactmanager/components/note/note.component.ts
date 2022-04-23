import { AfterViewInit, Component, Input, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


import { PostsService } from "../../services/Posts.service";


import { Note } from '../../interfaces/Note';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";


@Component({
  selector:'app-note',
  templateUrl:'./note.component.html',
  styleUrls: ["./note.component.scss"]
})

export class Notes implements OnInit, AfterViewInit{
  id!: number;
  @Input() userid !: number;

  displayedColumns: string[] = ['id', 'title', 'body'];
  dataSource !: MatTableDataSource<Note>;

constructor(private activatedRoute: ActivatedRoute, private userPosts: PostsService){

}


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

ngAfterViewInit() {
  // sorting
  this.dataSource.sort = this.sort;
}

ngOnInit():void{

  this.activatedRoute.params.subscribe(params=>{
    this.id = params['id'];
    this.userPosts.getUserPost(this.id).subscribe({
      next: data=>{this.dataSource = new MatTableDataSource<Note>(data)
        // paginator
        this.dataSource.paginator = this.paginator;

      },
      error: err=> console.log(err)
    });
})
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
}

