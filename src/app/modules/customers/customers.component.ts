import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.sass']
})
export class CustomersComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      order: [[ 1, 'asc' ]],
      pagingType: 'full_numbers',
      dom: "<'container'<'row'<'col-lg-6'<'#toolbar'>><'col-lg-6 hidden-xs'>>>" + 
      "tr" + 
      "<'container'<'row'<'col-lg-4'l><'col-lg-8'p>>>"
    };
  }
}
