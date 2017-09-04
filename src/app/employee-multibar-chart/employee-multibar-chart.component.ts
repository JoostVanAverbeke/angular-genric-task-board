import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {JobTimesService} from "../employee-dashboard/job_times.service";
declare let d3: any;

@Component({
  selector: 'app-employee-multibar-chart',
  templateUrl: './employee-multibar-chart.component.html',
  styleUrls: ['./employee-multibar-chart.component.scss', '../../../node_modules/nvd3/build/nv.d3.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeMultibarChartComponent implements OnInit {
  options;
  data;

  constructor(private jobTimesService: JobTimesService) { }

  ngOnInit() {
    this.options = {
      chart: {
        type: 'multiBarChart',
        height: 1000,
        margin : {
          top: 30,
          right: 40,
          bottom: 250,
          left: 50
        },
        clipEdge: true,
        // staggerLabels: true,
        duration: 500,
        stacked: true,
        xAxis: {
          axisLabel: 'Project Name',
          showMaxMin: false,
          rotateLabels: -65,
          // tickFormat: function(d){
          //   return d3.format(',f')(d);
          // }
        },
        yAxis: {
          axisLabel: 'Time spent (min)',
          axisLabelDistance: -20,
          tickFormat: function(d){
            return d3.format(',.1f')(d);
          }
        }
      }
    };
    this.jobTimesService.getJobTimesOfEmployee(2).then(data => this.data = data);
  }

}