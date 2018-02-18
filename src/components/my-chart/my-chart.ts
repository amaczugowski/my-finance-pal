import { Component, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js';
import { UserDataProvider } from '../../providers/user-data/user-data';

/**
 * Generated class for the MyChartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-chart',
  templateUrl: 'my-chart.html'
})
export class MyChartComponent implements AfterViewInit {

  canvas: any;
  ctx: any;
  taxes: number;
  housing: number;
  transportation: number;
  spending: number;
  saving: number;

  constructor(userDataProvider: UserDataProvider) {
    this.taxes = userDataProvider.getMonthlyTaxes();
    this.housing = userDataProvider.getHousing();
    this.transportation = userDataProvider.getTransportation();
    this.spending = userDataProvider.getSpending();
    this.saving = userDataProvider.getSaving();
  }

  ngAfterViewInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'pie',
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
                this.taxes, 
                this.housing, 
                this.transportation, 
                this.spending, 
                this.saving
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

    // this.canvas.onclick = function(e) {
    //    let slice = myChart.getElementAtEvent(e);
    //    if (!slice.length) return; // return if not clicked on slice
    //    let label = slice[0]._model.label;
    //    this.currLabel = label;
    //    alert('hi');
    // }
  }

}
