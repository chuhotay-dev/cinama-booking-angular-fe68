import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  movie: any = new BehaviorSubject({} as Object);
  shareMovie = this.movie.asObservable();
  constructor() {}

  sharingData(_movie: any) {
    this.movie.next(_movie);
  }
}
