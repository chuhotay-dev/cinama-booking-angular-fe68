import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss'],
})
export class ListMovieComponent implements OnInit {
  listMovie: any;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data
      .get('QuanLyPhim/LayDanhSachPhim?maNhom=GP03')
      .subscribe((result: any) => {
        this.listMovie = result.content;
        console.log(this.listMovie)
      });
  }
}
