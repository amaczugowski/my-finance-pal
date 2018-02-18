import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserDataProvider} from '../../providers/user-data/user-data';

@Component({
    selector: 'page-contact',
  	templateUrl: 'contact.html'
})


export class ContactPage {

  user_data = null;

  constructor(public navCtrl: NavController, user_data_provider: UserDataProvider) {
  	this.user_data = user_data_provider.get_user_data();
  	console.log(this.user_data)
  }

  public get_fed_tax(){
  	return (this.user_data.tax.fed).toFixed(2)
  }

  public get_state_tax(){
  	return (this.user_data.tax.state).toFixed(2);
  }

  public get_local_tax(){
  	return ((this.user_data.ret.user.yearly_income * 5) / 100).toFixed(2);
  }

  public get_after_tax(){
  	return (this.user_data.ret.user.yearly_income - (this.user_data.tax.fed + this.user_data.tax.state + Number(this.get_local_tax()) )).toFixed(2);
  }


}
