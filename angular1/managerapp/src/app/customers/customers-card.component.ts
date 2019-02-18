import { Component, OnInit,OnChanges, Input} from '@angular/core';
import { DataService } from '../core/services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customers-card',
  templateUrl: './customers-card.component.html',
  styleUrls: ['./customers-card.component.css']
})
export class CustomersCardComponent implements OnInit {

 // @Input() userData ;
  //constructor(private _dataService: DataService) { }

 // ngOnInit() {
 //  this._dataService.getCustomersData()
  // .subscribe(res => {
  //    console.log(res);
  //  })
 // }


 // ngOnChanges(){
 //   console.log('customers card component on change detection ')
 // }
  //clickEvent(){
 //   console.log('click event from card component');
 // }
    public customer =[];
    constructor(private _dataService: DataService,private _route:Router) {}

    ngOnInit()
    {
   this._dataService.getCustomersData() .subscribe(data => this.customer=data);
    }
 
    onClick(customerID:number)
    {
      this._route.navigate(['/customers',customerID]);
    }
}
