import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
 
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //callPageLoad(page:string){
  //  console.log('load customers page ')
  //  if(page === 'customers'){
  //    this.pageLoad.emit("customers");
  //  }else  if(page === "orders"){
  //    this.pageLoad.emit("orders");
  //  }
 // }
}
