import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/shared/share-data.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  movie: any;
  constructor(private shareData: ShareDataService) {}

  ngOnInit(): void {
    this.shareData.shareMovie.subscribe((data: any) => {
      console.log(data);
      this.movie = data;
    });
  }
}
