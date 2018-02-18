import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyChartComponent } from '../../components/my-chart/my-chart';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

}
