import { NgModule } from '@angular/core';
import { MyChartComponent } from './my-chart/my-chart';
import { MyGraphComponent } from './my-graph/my-graph';
@NgModule({
	declarations: [MyChartComponent,
    MyGraphComponent],
	imports: [],
	exports: [MyChartComponent,
    MyGraphComponent]
})
export class ComponentsModule {}
