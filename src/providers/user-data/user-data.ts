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

  public getYearlySalary() {
    return this.user_data.ret.user.yearly_income;
  }

  public getTaxes() {
    return this.user_data.tax.fed + 
        this.user_data.tax.state +
        (this.getYearlySalary() * .05);
  }

  public getMonthlyTaxes() {
    return this.getTaxes() / 12;
  }

  public getHousing() {
    return this.user_data.ret.user.house.morgage + 
        this.user_data.ret.user.house.house_maintenance + 
        this.user_data.ret.user.house.utulity;
  }

  public getTransportation() {
    return this.user_data.ret.user.vehicule.car_payment + 
        this.user_data.ret.user.vehicule.fuel;
  }

  public getSpending() {
    return this.user_data.ret.user.spending.grocery +
        this.user_data.ret.user.spending.monthly_suscription +
        this.user_data.ret.user.spending.restaurant +
        this.user_data.ret.user.spending.other_spending;
  }

  public getSaving() {
    return this.user_data.ret.user.saving.investment +
        this.user_data.ret.user.saving.saving_account +
        this.user_data.ret.user.saving.emrgency_saving;
  }

  public getAfterExpenses() {
    return this.getYearlySalary() - 12 *
        (this.getMonthlyTaxes() + 
        this.getHousing() + 
        this.getTransportation() + 
        this.getSaving() + 
        this.getSpending());
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
