import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from 'src/app/shared/share-data.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() movie: any;
  constructor(private shareData: ShareDataService) {}

  ngOnInit(): void {}

  quickView() {
    this.shareData.sharingData(this.movie);
  }
}
