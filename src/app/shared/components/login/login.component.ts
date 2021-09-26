import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    taiKhoan: new FormControl(''),
    matKhau: new FormControl(''),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private data: DataService
  ) {}

  ngOnInit(): void {}

  onLogin() {
    // this.authService.login(this.loginForm.value).subscribe(
    //   (data) => {
    //     console.log(data);
    //     localStorage.setItem('currentUser', JSON.stringify(data.content));
    //     this.router.navigate(['/']);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    this.data
      .post('QuanLyNguoiDung/DangNhap', this.loginForm.value)
      .subscribe((data) => {
        localStorage.setItem('currentUser', JSON.stringify(data.content));
        this.router.navigate(['/']);
      });
  }
}
