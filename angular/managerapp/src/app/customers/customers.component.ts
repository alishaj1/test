import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers:[DataService]
})
export class CustomersComponent implements OnInit {
data;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.data = this.dataService.getSampleData();  
 //   this.data = this.dataService.getCustomersData().subscribe(res => {
 //     console.log(res);

  //  })
  }
  ngOnChanges(){
    console.log('customers component on change detection');
  }

}
