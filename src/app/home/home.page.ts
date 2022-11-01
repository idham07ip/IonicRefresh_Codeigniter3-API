import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public GetDataMahasiswa: any;

  constructor(
    private http: HttpClient,
  ) {  this._Getdata();}

  _Getdata() {
    let data: Observable<any>;
    data = this.http.get('http://localhost/apinewUts/api/mahasiswa/');
    data.subscribe(result => {
      this.GetDataMahasiswa = result;
      console.log(result);
      this.GetDataMahasiswa = result.data;
    });
  }

  handleRefresh(event){
    setTimeout(() => {
      this._Getdata();
      event.target.complete();
    }, 2000);
  };
}
