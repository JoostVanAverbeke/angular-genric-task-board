import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Employee} from "../employee-dashboard/employee";

@Component({
  selector: 'app-employee-donut-chart',
  templateUrl: './employee-donut-chart.component.html',
  styleUrls: ['./employee-donut-chart.component.scss', '../../../node_modules/nvd3/build/nv.d3.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeDonutChartComponent implements OnInit {
  options;
  data;
  employee: Employee;

  constructor() { }

  ngOnInit() {
    this.options = {
      chart: {
        type: 'pieChart',
        height: 450,
        donut: true,
        x: function(d){return d.key;},
        y: function(d){return d.y;},
        showLabels: true,
        // pie: {
        //   startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
        //   endAngle: function(d) { return d.endAngle/2 -Math.PI/2 }
        // },
        duration: 500,
        legend: {
          margin: {
            top: 5,
            right: 140,
            bottom: 5,
            left: 0
          }
        }
      }
    };
  }

  setEmployeeQuery(employee: Employee, startDate: Date, endDate: Date) {
    if (employee != null) {
      console.log("generating piechart for empoyee = " + employee.name + " from " + startDate + " until " + endDate);
      this.employee = employee;
      this.data = [
        {
          key: "One",
          y: 5
        },
        {
          key: "Two",
          y: 2
        },
        {
          key: "Three",
          y: 9
        },
        {
          key: "Four",
          y: 7
        },
        {
          key: "Five",
          y: 4
        },
        {
          key: "Six",
          y: 3
        },
        {
          key: "Seven",
          y: .5
        }
      ];
    }
  }

}
