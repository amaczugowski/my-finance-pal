import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDataProvider {

  private user_data: any = null;

  constructor(public http: HttpClient) { }

  public get_user_data() {
    return this.user_data;
  }

  load() {
    return new Promise((resolve, reject) => {
      this.http
          .get('http://127.0.0.1:5000/api/get_saving_data?username=Souleymane')
          .subscribe(response => {
              this.user_data = response;
              console.log(this.user_data);
              resolve(true);
          })
    })
  }

}
