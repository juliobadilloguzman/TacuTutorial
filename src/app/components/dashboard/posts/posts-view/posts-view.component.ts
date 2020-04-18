import { Component, OnInit, ViewChild } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/post';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { EditPostComponent } from '../edit-post/edit-post.component';

@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.scss']
})
export class PostsViewComponent implements OnInit {

  posts: Post[];

  displayedColumns: string[] = ['id', 'title', 'body', 'opciones'];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private _postService: PostsService, public dialog: MatDialog) { }

  ngOnInit(): void {

    this._postService.getPosts().subscribe(
      res => {
        
        this.posts = res;
        this.dataSource = new MatTableDataSource<Post>(this.posts);
        this.dataSource.paginator = this.paginator;
        
        
      },
      err => console.error(err)
    );

  }

  deletePost(id:number|string): void{

    Swal.fire({
      title: 'Estas seguro?',
      text: "Esta acción no podrá revertirse.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {

      if (result.value) {

        //////TO DO: MANDAR A LLAMAR AL SERVICIO
        //////PARA ELIMINAR UN POST

        Swal.fire(
          'Eliminado!',
          'El post ha sido eliminado correctamente',
          'success'
        );

      }

    })

  }


  editPost(post: Post): void{

    console.log(post);
    
    this.dialog.open(EditPostComponent, {
      width: '250px'
    });

  }

}
