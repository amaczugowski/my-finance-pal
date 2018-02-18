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

  constructor(userDataProvider: UserDataProvider) {
    this.goals = userDataProvider;
  }

  ngAfterViewInit() {
    this.canvas = document.getElementById('myGraph');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
          labels: [
            "Taxes", 
            "Housing", 
            "Transportation", 
            "Spending", 
            "Saving"
          ],
          datasets: [{
              data: [
                1, 2, 3, 4, 5
              ],
              backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(135, 84, 200, 1)',
                  'rgba(22, 128, 44, 1)'
              ],
              borderWidth: 1
          }],
          display: false
      },
      options: {
        legend: {
          display: true
          // position: 'right'
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
