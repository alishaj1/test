import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
  providers:[DataService]
})
export class CustomerDetailsComponent implements OnInit {
  customerdetail;
  constructor(private dataService:DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  
    console.log(this.activatedRoute.params);
    let id ;
    this.activatedRoute.parent.params.subscribe(
      (params) =>{
       console.log(params);
        id = params['id'];
        console.log("id",id);
      },
      (err)=> {console.log(err)},
      ()=> {console.log('completed')}
    )
    this.dataService.getCustomersData().subscribe((customerdetail)=>{
      this.customerdetail = customerdetail;
      setTimeout(function(){
        console.log(this.customerdetail);
      },1000)
     
        //  console.log("id",id);
      
    })

  }

}