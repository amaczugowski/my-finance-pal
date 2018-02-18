import { Component, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js';
import { UserDataProvider } from '../../providers/user-data/user-data';

/**
 * Generated class for the MyGraphComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-graph',
  templateUrl: 'my-graph.html'
})
export class MyGraphComponent implements AfterViewInit {

  canvas: any;
  ctx: any;
  goals: any;
  lineChartData: any = {};

  constructor(userDataProvider: UserDataProvider) {
    this.goals = userDataProvider.get_user_data().recomandation;
    this.lineChartData = {
      labels: ["Feb 2018", "Jul 2018", "Feb 2019", "Jul 2019", 
          "Feb 2020", "Jul 2020", "Feb 2021", "Jul 2021", "Feb 2022"],
      datasets: []
    };

    for (let g in this.goals) {
      let len = this.goals[g].end[0] - this.goals[g].start[0];
      let height = this.goals[g].end[1] - this.goals[g].start[1];
      let slope = height / (len * 2);

      let rgb = (197 * (height + 1)) % 256 + "," + (121 * (height + 1)) % 256 + ",0";
      let c1 = "rgba(" + rgb + ",0.8)";
      let c2 = "rgba(" + rgb + ",0.2)";

      let dset = {
        label: g,
        fill: true,
        lineTension: 0.1,
        backgroundColor: c2,
        borderColor: c1,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        // pointBorderColor: "white",
        // pointBackgroundColor: 'grey',
        pointBorderWidth: 1,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "brown",
        pointHoverBorderColor: "yellow",
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 10,
        data: []
      };
      
      for (let i = 0; i < len * 2; i++) {
        dset.data.push(i * slope);
      }

      this.lineChartData.datasets.push(dset);
    }

    let monthlySavings = userDataProvider.getSaving();
    let rgb = (197 * (monthlySavings + 1)) % 256 + "," + (121 * (monthlySavings + 1)) % 256 + ",0";
    let c1 = "rgba(" + rgb + ",0.8)";
    let c2 = "rgba(" + rgb + ",0.2)";
    
    let dset = {
      label: 'trajectory',
      fill: true,
      lineTension: 0.1,
      backgroundColor: c2,
      borderColor: c1,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      // pointBorderColor: "white",
      // pointBackgroundColor: 'grey',
      pointBorderWidth: 1,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: "brown",
      pointHoverBorderColor: "yellow",
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      data: []
    };
    
    for (let i = 0; i < 9; i++) {
      dset.data.push(i * monthlySavings);
    }

    this.lineChartData.datasets.push(dset);
  }

  ngAfterViewInit() {
    this.canvas = document.getElementById('myGraph');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'line',
      data: this.lineChartData,
      options: {
        legend: {
          display: true,
          position: 'bottom'
        },
        // scale: {
        //   ticks: {
        //     display: false
        //   }
        // },
        responsive: false,
        display: true
      }
    });
  }

}
