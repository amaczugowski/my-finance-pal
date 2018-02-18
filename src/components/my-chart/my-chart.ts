import { Component, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { Events } from 'ionic-angular';

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
  user_data;

  constructor(userDataProvider: UserDataProvider) {
    this.user_data = userDataProvider.get_user_data();;
    this.taxes = userDataProvider.getMonthlyTaxes();
    this.housing = userDataProvider.getHousing();
    this.transportation = userDataProvider.getTransportation();
    this.spending = userDataProvider.getSpending();
    this.saving = userDataProvider.getSaving();
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

    this.canvas.onclick = function(e) {
       var slice = myChart.getElementAtEvent(e);
       if (!slice.length) return; // return if not clicked on slice
       var label = slice[0]._model.label;
       //debugger;
       switch (label) {
      // add case for each label/slice
      case 'Taxes':
          let a =  <HTMLElement>document.querySelector("#taxes");
             a.style.display = "block";
             let b = <HTMLElement>document.querySelector("#details");
             b.style.display = "none";
             let c = <HTMLElement>document.querySelector("#housing");
             c.style.display = "none";
             let d = <HTMLElement>document.querySelector("#transportation");
             d.style.display = "none";
             let e = <HTMLElement>document.querySelector("#spending");
             e.style.display = "none";
             let f = <HTMLElement>document.querySelector("#saving");
             f.style.display = "none";
             // disable the rest
         break;
      case 'Housing':
           let g = <HTMLElement>document.querySelector("#housing");
             g.style.display = "block";
             let h = <HTMLElement>document.querySelector("#details");
             h.style.display = "none";
             let gl = <HTMLElement>document.querySelector("#taxes");
             gl.style.display = "none";
             let hk = <HTMLElement>document.querySelector("#transportation");
             hk.style.display = "none";
             let i = <HTMLElement>document.querySelector("#spending");
             i.style.display = "none";
             let j = <HTMLElement>document.querySelector("#saving");
             j.style.display = "none";
           // disable the rest
                 break;
      case 'Transportation':
         let x = <HTMLElement>document.querySelector("#transportation");
         x.style.display = "block";
         let y = <HTMLElement>document.querySelector("#details");
         y.style.display = "none";
         let z = <HTMLElement>document.querySelector("#housing");
         z.style.display = "none";
         let ua = <HTMLElement>document.querySelector("#taxes");
         ua.style.display = "none";
         let va = <HTMLElement>document.querySelector("#spending");
         va.style.display = "none";
         let wa = <HTMLElement>document.querySelector("#saving");
         wa.style.display = "none";
         // disable the rest
         break;
      case 'Spending':
         let xd =  <HTMLElement>document.querySelector("#spending");
           xd.style.display = "block";
           let yd =  <HTMLElement>document.querySelector("#details");
           yd.style.display = "none";
           let td =  <HTMLElement>document.querySelector("#housing");
           td.style.display = "none";
           let dd = <HTMLElement>document.querySelector("#transportation");
           dd.style.display = "none";
           let ed =  <HTMLElement>document.querySelector("#taxes");
           ed.style.display = "none";
           let fd =  <HTMLElement>document.querySelector("#saving");
           fd.style.display = "none";
         // disable the rest
         break;
      case 'Saving':
         let xg = <HTMLElement>document.querySelector("#saving");
           xg.style.display = "block";
           let yg = <HTMLElement>document.querySelector("#details");
           yg.style.display = "none";
           let tg = <HTMLElement>document.querySelector("#housing");
           tg.style.display = "none";
           let dg = <HTMLElement>document.querySelector("#transportation");
           dg.style.display = "none";
           let eg = <HTMLElement>document.querySelector("#spending");
           eg.style.display = "none";
           let fg = <HTMLElement>document.querySelector("#taxes");
           fg.style.display = "none";
         // disable the rest
         break;
      default:
        //alert(label)
   }
       
      }

  }

}
