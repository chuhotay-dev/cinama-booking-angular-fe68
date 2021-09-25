import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(account: User): Observable<any> {
    const url = 'http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangNhap';
    return this.http.post(url, account);
  }
}
